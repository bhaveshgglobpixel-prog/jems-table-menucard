import React, { useEffect, useRef, useState } from 'react';

const MASTER_IMAGE_SRC = '/assets/aistudio/Frame_193_57df070e.jpg';

interface CropProps {
  type: 'logo' | 'ribs' | 'desserts' | 'qrcode';
  alt: string;
  className?: string;
  borderClassName?: string;
}

// Coordinates in the 1215 x 8640 master image
const CROP_COORDINATES = {
  logo: { sx: 110, sy: 95, sw: 220, sh: 220 },
  ribs: { sx: 585, sy: 1770, sw: 540, sh: 540 },
  desserts: { sx: 45, sy: 5560, sw: 540, sh: 540 },
  qrcode: { sx: 835, sy: 8120, sw: 200, sh: 200 },
};

export const MasterImageCrop: React.FC<CropProps> = ({
  type,
  alt,
  className = '',
  borderClassName = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = MASTER_IMAGE_SRC;

    img.onload = () => {
      if (!isMounted || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { sx, sy, sw, sh } = CROP_COORDINATES[type];
      
      // Calculate responsive canvas output size for 2x retina sharpness
      canvas.width = sw;
      canvas.height = sh;

      ctx.clearRect(0, 0, sw, sh);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
      setLoaded(true);
    };

    img.onerror = () => {
      if (isMounted) setError(true);
    };

    return () => {
      isMounted = false;
    };
  }, [type]);

  return (
    <div className={`relative overflow-hidden ${borderClassName}`}>
      <canvas
        ref={canvasRef}
        aria-label={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#E5DCCB]/40 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading {alt}...</span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 bg-[#103B2B] text-white flex items-center justify-center p-2 text-xs text-center">
          {alt}
        </div>
      )}
    </div>
  );
};
