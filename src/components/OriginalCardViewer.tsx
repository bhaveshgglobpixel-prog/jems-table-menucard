import React, { useState, useRef, useEffect } from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  RotateCcw,
  Download,
  Printer,
  ChevronUp,
  Share2,
  Check,
} from 'lucide-react';

interface Props {
  onSwitchToInteractive: () => void;
}

export const OriginalCardViewer: React.FC<Props> = ({ onSwitchToInteractive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    { label: 'Top', percent: 0 },
    { label: 'Signature', percent: 0.16 },
    { label: 'Entrees', percent: 0.31 },
    { label: 'Sides', percent: 0.46 },
    { label: 'Desserts', percent: 0.58 },
    { label: 'Meats', percent: 0.70 },
    { label: 'Ordering', percent: 0.77 },
    { label: 'Contact', percent: 0.94 },
  ];

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleJumpToSection = (percent: number) => {
    if (!containerRef.current) return;
    const scrollHeight = containerRef.current.scrollHeight;
    containerRef.current.scrollTo({
      top: scrollHeight * percent,
      behavior: 'smooth',
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Jems Table Catering Menu',
          text: 'Check out the digital catering menu for Jems Table!',
          url: window.location.href,
        });
      } catch {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      setShowScrollTop(containerRef.current.scrollTop > 400);
    };
    const el = containerRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col h-full bg-[#181B18] select-none">
      {/* Top Controls Toolbar */}
      <div className="no-print sticky top-0 z-30 flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3 bg-[#103B2B]/95 backdrop-blur-md border-b border-[#DE6B35]/25 text-white shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-cinzel font-bold text-sm sm:text-base text-[#F7F4EB] tracking-wider hidden sm:inline">
            ORIGINAL CARD
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-[#DE6B35] text-white font-medium">
            1215 x 8640 Master
          </span>
        </div>

        {/* Section Quick Jump Buttons */}
        <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto py-1">
          {sections.map((sec) => (
            <button
              key={sec.label}
              onClick={() => handleJumpToSection(sec.percent)}
              className="text-xs px-2.5 py-1 rounded bg-[#1B4B38] hover:bg-[#DE6B35] text-[#F7F4EB] transition-colors whitespace-nowrap cursor-pointer"
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-1.5 sm:p-2 rounded bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono w-12 text-center text-white/90">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-1.5 sm:p-2 rounded bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            title="Reset Zoom"
            className="p-1.5 sm:p-2 rounded bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleShare}
            title="Share Menu"
            className="p-1.5 sm:p-2 rounded bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
          <button
            onClick={handlePrint}
            title="Print Menu"
            className="p-1.5 sm:p-2 rounded bg-[#DE6B35] hover:bg-[#c85a26] text-white transition cursor-pointer flex items-center gap-1 text-xs font-medium px-2.5"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      {/* Main Image Viewer Container */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto p-2 sm:p-6 flex justify-center items-start cursor-grab active:cursor-grabbing"
      >
        <div
          className="relative max-w-full transition-transform duration-100 shadow-2xl rounded-sm overflow-hidden bg-[#FAF6EC]"
          style={{
            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: 'top center',
          }}
        >
          <img
            src="/assets/aistudio/Frame_193_57df070e.jpg"
            alt="Jems Table Catering Menu Master Reference"
            className="w-full max-w-[850px] sm:max-w-[900px] h-auto object-contain block pointer-events-auto"
            loading="eager"
            draggable={false}
          />
        </div>
      </div>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          className="no-print fixed bottom-6 right-6 p-3 rounded-full bg-[#103B2B] text-white shadow-xl hover:bg-[#DE6B35] transition-all cursor-pointer z-40 border border-[#DE6B35]/30"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
