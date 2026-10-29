import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#141715] flex flex-col items-center justify-start py-0 sm:py-6 px-0 sm:px-2">
      {/* Menu Card Container rendered at ultra-high resolution generated from Frame_195_8acc4b3a.pdf */}
      <main className="w-full max-w-[1280px] mx-auto bg-[#FAF6EC] shadow-2xl overflow-hidden sm:rounded-sm flex justify-center">
        <img
          src="/assets/aistudio/menu_card_ultra_hd.jpg"
          srcSet="/assets/aistudio/menu_card_hi_res.jpg 1500w, /assets/aistudio/menu_card_ultra_hd.jpg 1800w"
          sizes="(max-width: 768px) 100vw, 1280px"
          alt="Jems Table Catering Menu"
          className="w-full h-auto block select-none"
          loading="eager"
          decoding="sync"
          // @ts-expect-error fetchpriority attribute is supported in modern browsers
          fetchpriority="high"
          style={{
            imageRendering: 'auto',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        />
      </main>
    </div>
  );
}
