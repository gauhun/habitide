import React from 'react';

// Apple logo SVG icon
export const AppleLogo = ({ fill = "white", ...props }) => (
  <svg width="20" height="24" viewBox="0 0 384 512" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

// Google Play store logo — official 4-color triangle.
export const PlayLogo = ({ ...props }) => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* Blue — left "spine" wedge */}
    <path
      d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l232.4-232.4L47 0z"
      fill="#4285F4"
    />
    {/* Green — top half */}
    <path
      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
      fill="#34A853"
    />
    {/* Yellow — right tip */}
    <path
      d="M468.2 195.6l-58.3-33.5-65.4 65.4 65.4 65.4 58.7-33.7c16.6-9.5 16.6-25-.4-33.6z"
      fill="#FBBC04"
    />
    {/* Red — bottom half */}
    <path
      d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
      fill="#EA4335"
    />
  </svg>
);

export const StoreBadges = ({ appStoreUrl, playStoreUrl, className = '' }) => (
  <div className={`badge-row ${className}`}>
    <a
      id="app-store-badge"
      href={appStoreUrl || '#'}
      className="store-badge"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
    >
      <AppleLogo />
      <span className="store-badge-label">
        <span className="store-badge-sub">Download on the</span>
        <span className="store-badge-name">App Store</span>
      </span>
    </a>
    <a
      id="play-store-badge"
      href={playStoreUrl || '#'}
      className="store-badge"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
    >
      <PlayLogo />
      <span className="store-badge-label">
        <span className="store-badge-sub">Get it on</span>
        <span className="store-badge-name">Google Play</span>
      </span>
    </a>
  </div>
);

export default StoreBadges;
