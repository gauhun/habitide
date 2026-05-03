import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

const VIDEO_SOURCES = [
  'h5fmmLDfAAc',
  'k13RHM-rj8g',
  '9tRkqL273iU',
  'ccDzTdoHSRQ',
  'JEY05eLCAFI',
];

const YT_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

const asVideoId = (value) => {
  if (!value || typeof value !== 'string') return null;
  const trimmed = value.trim();
  return YT_ID_PATTERN.test(trimmed) ? trimmed : null;
};

const extractVideoId = (input) => {
  const directId = asVideoId(input);
  if (directId) return directId;

  let parsed;
  try {
    parsed = new URL(input);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, '').toLowerCase();

  if (host === 'youtu.be') {
    return asVideoId(parsed.pathname.split('/').filter(Boolean)[0]);
  }

  if (!host.endsWith('youtube.com') && !host.endsWith('youtube-nocookie.com')) {
    return null;
  }

  const pathParts = parsed.pathname.split('/').filter(Boolean);
  if (pathParts[0] === 'shorts' || pathParts[0] === 'embed' || pathParts[0] === 'v') {
    return asVideoId(pathParts[1]);
  }

  return asVideoId(parsed.searchParams.get('v'));
};

const VIDEO_IDS = VIDEO_SOURCES
  .map(extractVideoId)
  .filter((id) => typeof id === 'string');

// YouTube postMessage helper: command names mirror the JS API
const ytPost = (iframe, func, args = []) => {
  if (!iframe?.contentWindow) return;
  iframe.contentWindow.postMessage(
    JSON.stringify({ event: 'command', func, args }),
    '*'
  );
};

const VideoCard = ({ videoId, isActive, soundOn, onEnded, onRequestFocus, onUserInteract }) => {
  const iframeRef = useRef(null);
  const isActiveRef = useRef(isActive);
  const soundOnRef = useRef(soundOn);
  const [isPlaying, setIsPlaying] = useState(false);
  // Tracks user intent to pause the active video. Cleared when the card
  // becomes inactive so re-activating later starts playing again.
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => { isActiveRef.current = isActive; }, [isActive]);
  useEffect(() => { soundOnRef.current = soundOn; }, [soundOn]);

  useEffect(() => {
    if (!isActive) setUserPaused(false);
  }, [isActive]);

  // Build embed URL once. URL params are STATIC so the iframe never reloads —
  // mute/unmute is controlled at runtime via postMessage. `mute=1` in the URL
  // is required so the very first autoplay is allowed by the browser; once
  // the user gestures we send `unMute` to the player.
  const src = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const params = new URLSearchParams({
      enablejsapi: '1',
      autoplay: '1',
      mute: '1',
      controls: '0',
      modestbranding: '1',
      rel: '0',
      playsinline: '1',
      iv_load_policy: '3',
      fs: '0',
      disablekb: '1',
      origin,
    });
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  }, [videoId]);

  // Subscribe to player events when the iframe loads
  useEffect(() => {
    const onLoad = () => {
      const iframe = iframeRef.current;
      if (!iframe?.contentWindow) return;
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'listening', id: videoId }),
        '*'
      );
      if (isActiveRef.current) {
        if (soundOnRef.current) ytPost(iframe, 'unMute');
        else ytPost(iframe, 'mute');
        ytPost(iframe, 'playVideo');
      }
    };

    const iframe = iframeRef.current;
    iframe?.addEventListener('load', onLoad);
    return () => iframe?.removeEventListener('load', onLoad);
  }, [videoId]);

  // Active toggle — apply mute state, then play/pause based on user intent
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    if (isActive) {
      if (soundOn) ytPost(iframe, 'unMute');
      else ytPost(iframe, 'mute');
      // Don't auto-resume if the user explicitly paused this card.
      if (!userPaused) ytPost(iframe, 'playVideo');
      else ytPost(iframe, 'pauseVideo');
    } else {
      ytPost(iframe, 'pauseVideo');
      // Always silence inactive players so audio never overlaps
      ytPost(iframe, 'mute');
    }
  }, [isActive, soundOn, userPaused]);

  // Listen for state-change messages so we know when the active video ended
  useEffect(() => {
    const handleMessage = (event) => {
      const origin = event.origin || '';
      if (
        !origin.endsWith('youtube.com')
        && !origin.endsWith('youtube-nocookie.com')
      ) return;

      let payload;
      try { payload = JSON.parse(event.data); } catch { return; }
      if (!payload || event.source !== iframeRef.current?.contentWindow) return;

      if (payload.event === 'onStateChange') {
        const state = payload.info; // 1 playing, 2 paused, 0 ended
        if (state === 1) setIsPlaying(true);
        else if (state === 2 || state === 0) setIsPlaying(false);
        if (state === 0 && isActiveRef.current) onEnded?.();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onEnded]);

  const handleOverlayClick = () => {
    onUserInteract?.();
    if (!isActive) {
      // Clicking a side card brings it into focus; it'll start fresh (not paused).
      setUserPaused(false);
      onRequestFocus?.();
      return;
    }
    const iframe = iframeRef.current;
    // Toggle our explicit "user wants paused" intent. We avoid relying on
    // `isPlaying` here because YouTube's `onStateChange` PLAYING message can
    // arrive after the user's first tap, which would make us mis-detect the
    // current state and skip the pause.
    setUserPaused((prev) => {
      const next = !prev;
      if (!iframe) return next;
      if (next) {
        ytPost(iframe, 'pauseVideo');
      } else {
        ytPost(iframe, 'unMute');
        ytPost(iframe, 'playVideo');
      }
      return next;
    });
  };

  const showPausedIcon = isActive && userPaused;

  return (
    <div className={`video-card ${isActive ? 'active' : ''}`}>
      <div className="video-wrapper">
        <iframe
          ref={iframeRef}
          className="yt-player-host"
          src={src}
          title={`Habitide short ${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
          frameBorder="0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {/* Covers iframe so only tap-to-play/pause works (no YouTube UI clicks). */}
        <button
          type="button"
          className="video-overlay"
          aria-label={userPaused ? 'Play video' : 'Pause video'}
          onClick={handleOverlayClick}
        >
          {showPausedIcon && (
            <span className="video-play-indicator" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VideoFeed = () => {
  const sectionRef = useFadeUp();
  const [activeVideo, setActiveVideo] = useState(0);
  // Browser autoplay policy: a video can only autoplay with sound after the
  // user has interacted with the page. We start muted (so the first video
  // actually autoplays), then flip soundOn=true on the very first user gesture
  // anywhere on the page — VideoCard listens and `unMute`s the active player.
  const [soundOn, setSoundOn] = useState(false);
  const scrollRef = useRef(null);
  const scrollRafRef = useRef(null);
  const ignoreScrollSyncUntilRef = useRef(0);

  const markUserInteracted = useCallback(() => {
    setSoundOn(true);
  }, []);

  // Listen once for any user gesture on the page so we can unmute audio.
  useEffect(() => {
    const handler = () => setSoundOn(true);
    const opts = { once: true, passive: true, capture: true };
    window.addEventListener('pointerdown', handler, opts);
    window.addEventListener('keydown', handler, opts);
    window.addEventListener('touchstart', handler, opts);
    return () => {
      window.removeEventListener('pointerdown', handler, opts);
      window.removeEventListener('keydown', handler, opts);
      window.removeEventListener('touchstart', handler, opts);
    };
  }, []);

  const advanceVideo = useCallback(() => {
    setActiveVideo((i) => (i + 1) % VIDEO_IDS.length);
  }, []);

  const goToVideo = useCallback((nextIndex) => {
    setSoundOn(true);
    const clamped = Math.max(0, Math.min(VIDEO_IDS.length - 1, nextIndex));
    setActiveVideo(clamped);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const card = container?.children?.[activeVideo];
    if (!card) return;
    ignoreScrollSyncUntilRef.current = Date.now() + 700;
    card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeVideo]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRafRef.current != null) cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = requestAnimationFrame(() => {
        scrollRafRef.current = null;
        if (Date.now() < ignoreScrollSyncUntilRef.current) return;
        const el = scrollRef.current;
        if (!el) return;

        // Find the card whose center is closest to the viewport center
        const viewportCenter = el.scrollLeft + el.offsetWidth / 2;
        let closestIdx = 0;
        let closestDist = Infinity;
        for (let i = 0; i < el.children.length; i += 1) {
          const child = el.children[i];
          const childCenter = child.offsetLeft + child.offsetWidth / 2;
          const dist = Math.abs(childCenter - viewportCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = i;
          }
        }
        setActiveVideo((prev) => (closestIdx !== prev ? closestIdx : prev));
      });
    };

    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
      if (scrollRafRef.current != null) cancelAnimationFrame(scrollRafRef.current);
    };
  }, []);

  const isFirst = activeVideo === 0;
  const isLast = activeVideo === VIDEO_IDS.length - 1;

  return (
    <section className="section video-feed-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-up" style={{ textAlign: 'center', marginBottom: 40 }}>
          <p className="eyebrow">Experience Habitide</p>
          <h2 className="display-section">Built for focus.</h2>
        </div>

        <div className="video-feed-stage">
          {!soundOn && (
            <button
              type="button"
              className="video-sound-hint"
              onClick={markUserInteracted}
              aria-label="Enable sound"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 9v6h4l5 4V5L9 9H5zM16 7c1.5 1.3 1.5 8.7 0 10M19 5c3 2.5 3 11.5 0 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tap for sound
            </button>
          )}

          <button
            type="button"
            className="video-nav-btn video-nav-prev"
            onClick={() => goToVideo(activeVideo - 1)}
            disabled={isFirst}
            aria-label="Previous video"
          >
            <ChevronLeft />
          </button>

          <div className="video-feed-scroll" ref={scrollRef}>
            {VIDEO_IDS.map((id, index) => (
              <VideoCard
                key={id}
                videoId={id}
                isActive={activeVideo === index}
                soundOn={soundOn}
                onEnded={advanceVideo}
                onRequestFocus={() => setActiveVideo(index)}
                onUserInteract={markUserInteracted}
              />
            ))}
          </div>

          <button
            type="button"
            className="video-nav-btn video-nav-next"
            onClick={() => goToVideo(activeVideo + 1)}
            disabled={isLast}
            aria-label="Next video"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="video-feed-dots" role="tablist" aria-label="Video selector">
          {VIDEO_IDS.map((id, index) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeVideo === index}
              aria-label={`Show video ${index + 1}`}
              className={`video-feed-dot ${activeVideo === index ? 'active' : ''}`}
              onClick={() => goToVideo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoFeed;
