/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F2E4] flex flex-col items-center justify-start w-full overflow-x-hidden no-scrollbar">
      {/* Mobile-First Menu Container */}
      <main className="w-full max-w-[480px] mx-auto flex flex-col p-0 m-0 no-scrollbar select-none relative">
        <div className="relative w-full block leading-none p-0 m-0">
          <img
            src="/menu-hd.jpg"
            alt="Jems Table Catering Menu - High Resolution"
            className="w-full h-auto block p-0 m-0"
            style={{
              imageRendering: 'auto',
              display: 'block',
            }}
            loading="eager"
          />

          {/* Interactive Hotspot for Footer: Clickable bookings@jemstable.com */}
          <a
            href="mailto:bookings@jemstable.com?subject=Jems%20Table%20Catering%20Inquiry"
            className="absolute left-[6.5%] top-[96.3%] w-[55%] h-[1.8%] rounded-lg cursor-pointer bg-transparent"
            title="Email bookings@jemstable.com"
            aria-label="Email bookings@jemstable.com"
          />

          {/* Interactive Hotspot for Footer: Clickable QR Code / Contact Me */}
          <a
            href="mailto:bookings@jemstable.com?subject=Jems%20Table%20Catering%20Order%20Inquiry"
            className="absolute right-[6.5%] top-[95.2%] w-[28%] h-[3.4%] rounded-xl cursor-pointer bg-transparent"
            title="Contact Me / Tap to order"
            aria-label="Contact Me"
          />
        </div>
      </main>
    </div>
  );
}
