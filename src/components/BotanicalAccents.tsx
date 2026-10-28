import React from 'react';

export const TopLeftLeaves: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Terracotta large leaf */}
    <path
      d="M-20 0C10 50 25 100 15 150C-5 130 -15 80 -20 0Z"
      fill="#DE6B35"
      fillOpacity="0.9"
    />
    <path
      d="M10 20C40 60 45 110 30 160C15 130 10 80 10 20Z"
      fill="#D45D25"
      fillOpacity="0.75"
    />
    {/* Dark green sprig */}
    <path
      d="M-10 60C20 90 60 110 90 120C75 135 45 135 15 125L-10 60Z"
      fill="#103B2B"
    />
    {/* Small leaf accents */}
    <path
      d="M45 130C65 145 75 170 70 190C55 185 45 165 45 130Z"
      fill="#103B2B"
      fillOpacity="0.85"
    />
    <path
      d="M75 115C95 125 110 145 115 165C100 165 85 150 75 115Z"
      fill="#103B2B"
      fillOpacity="0.85"
    />
    <path
      d="M95 100C120 105 135 120 145 135C130 145 110 135 95 100Z"
      fill="#103B2B"
    />
  </svg>
);

export const TopRightLeaves: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    {/* Dark forest green cascading foliage */}
    <path
      d="M190 -10C160 50 140 120 155 180C175 160 185 90 190 -10Z"
      fill="#103B2B"
    />
    <path
      d="M160 40C120 80 100 130 110 190C130 165 145 110 160 40Z"
      fill="#133E31"
    />
    {/* Side sprig */}
    <path
      d="M140 140C100 160 80 190 75 220C95 215 120 195 140 140Z"
      fill="#103B2B"
    />
    <path
      d="M110 170C80 185 65 210 60 235C80 230 95 210 110 170Z"
      fill="#103B2B"
    />
  </svg>
);

export const MidRightLeaves: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 140 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M140 30C100 50 80 90 85 130C110 115 130 80 140 30Z"
      fill="#103B2B"
    />
    <path
      d="M110 90C80 105 60 130 65 160C85 150 100 125 110 90Z"
      fill="#103B2B"
      fillOpacity="0.9"
    />
    <path
      d="M90 135C65 150 50 170 55 190C70 180 85 165 90 135Z"
      fill="#103B2B"
      fillOpacity="0.75"
    />
  </svg>
);

export const DecorativeWaveBanner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full overflow-hidden my-4 sm:my-6 ${className}`}>
    <svg
      viewBox="0 0 800 110"
      preserveAspectRatio="none"
      className="w-full h-16 sm:h-20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curved dark green banner background */}
      <path
        d="M0 45C150 15 250 5 400 5C550 5 650 15 800 45V110H0V45Z"
        fill="#103B2B"
      />
      {/* Orange accent edge line */}
      <path
        d="M0 40C150 10 250 0 400 0C550 0 650 10 800 40"
        stroke="#DE6B35"
        strokeWidth="3.5"
      />
      <path
        d="M50 48C180 24 270 16 400 16C530 16 620 24 750 48"
        stroke="#DE6B35"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
    </svg>
    {/* Chef Hat outline and leaf branches overlaid */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex items-center gap-4 text-[#DE6B35] pt-4 sm:pt-6">
        <svg className="w-12 h-6 opacity-80" viewBox="0 0 80 30" fill="currentColor">
          <path d="M70 15C50 10 30 15 10 25C25 15 45 10 70 15Z" />
          <circle cx="25" cy="18" r="3" />
          <circle cx="45" cy="14" r="3.5" />
          <circle cx="65" cy="13" r="3" />
        </svg>
        {/* Chef Hat Icon */}
        <div className="p-2 border-2 border-[#DE6B35] rounded-full bg-[#103B2B] text-[#DE6B35] shadow">
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
            <line x1="6" y1="17" x2="18" y2="17" />
          </svg>
        </div>
        <svg className="w-12 h-6 opacity-80 rotate-180" viewBox="0 0 80 30" fill="currentColor">
          <path d="M70 15C50 10 30 15 10 25C25 15 45 10 70 15Z" />
          <circle cx="25" cy="18" r="3" />
          <circle cx="45" cy="14" r="3.5" />
          <circle cx="65" cy="13" r="3" />
        </svg>
      </div>
    </div>
  </div>
);

export const OrangeAccentUnderline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-2.5 sm:h-3 ${className}`}
  >
    <path
      d="M3 8C35 4 80 4 117 7C85 11 35 11 3 8Z"
      fill="#DE6B35"
    />
  </svg>
);
