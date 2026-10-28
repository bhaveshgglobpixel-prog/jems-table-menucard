import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#141715] flex flex-col items-center justify-start py-0 sm:py-6 px-0 sm:px-2">
      {/* Menu Card Container rendered at full native resolution (1215px width) */}
      <main className="w-full max-w-[1215px] mx-auto bg-[#FAF6EC] shadow-2xl overflow-hidden sm:rounded-sm flex justify-center">
        <img
          src="/assets/aistudio/Frame_193_57df070e.jpg"
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
