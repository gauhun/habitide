import React from 'react';

// Apple logo SVG icon
const AppleLogo = () => (
  <svg width="20" height="24" viewBox="0 0 814 1000" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.3-151.8-110.1C226.2 813.4 172.2 661.5 172.2 517.4c0-190.5 124.4-291.1 246.7-291.1 66.4 0 121.9 41.7 163.8 41.7 40 0 103.7-44 178.1-44 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
  </svg>
);

// Google Play store logo — official 4-color triangle.
const PlayLogo = () => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
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
