import React from 'react';
import { Users, Utensils, MapPin } from 'lucide-react';

export const MenuHeader: React.FC = () => {
  return (
    <header className="relative pt-4 pb-2 px-3 sm:px-6 overflow-hidden">
      {/* Decorative Botanical Leaf Flourishes */}
      <img
        src="/assets/extracted/leaf_top_left.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-12 sm:w-16 pointer-events-none select-none opacity-90"
      />
      <img
        src="/assets/extracted/leaf_top_right.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-24 sm:w-28 pointer-events-none select-none opacity-95"
      />

      {/* Brand & Logo Header */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto mb-5 sm:mb-6 pt-2">
        {/* JEMS TABLE Official Logo Badge */}
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-sm border border-[#D99A36]/60">
          <img
            src="/assets/extracted/jems_logo.png"
            alt="Jems Table Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brand Text Lockup */}
        <div className="flex flex-col justify-center border-l-2 border-[#D96E27] pl-3 py-0.5">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#0C382E] font-serif-brand leading-none">
            JEMS TABLE
          </h1>
          <p className="text-sm sm:text-base text-[#D96E27] font-script tracking-wide font-medium mt-1 leading-tight">
            Thoughtfully Prepared and Joyfully Shared
          </p>
        </div>
      </div>

      {/* CATERING MENU Title */}
      <div className="text-center my-3 sm:my-4">
        <h2 className="text-4xl sm:text-5xl font-black tracking-widest text-[#0C382E] font-serif-brand uppercase leading-tight">
          CATERING
        </h2>
        {/* MENU with horizontal bars */}
        <div className="flex items-center justify-center gap-3 max-w-[200px] sm:max-w-[240px] mx-auto mt-1">
          <div className="h-[1.5px] bg-[#DF6921] flex-1"></div>
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#DF6921] uppercase">
            MENU
          </span>
          <div className="h-[1.5px] bg-[#DF6921] flex-1"></div>
        </div>
      </div>

      {/* Trust & Credential Indicators */}
      <div className="mt-5 mb-6 py-2.5 px-2 bg-[#F3EAD9]/60 rounded-xl border border-[#E8DDCA] max-w-lg mx-auto shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-1 sm:gap-x-2 text-[11px] sm:text-xs font-semibold text-[#18352A]">
          {/* Item 1 */}
          <div className="flex items-center justify-center gap-1.5 px-1">
            <Users className="w-3.5 h-3.5 text-[#18352A] shrink-0" />
            <span className="whitespace-nowrap">Family Owned</span>
          </div>
          {/* Item 2 */}
          <div className="flex items-center justify-center gap-1.5 px-1 sm:border-l border-[#C8BAA3]">
            {/* Chef Hat Custom SVG */}
            <svg
              className="w-3.5 h-3.5 text-[#18352A] shrink-0 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 3a4.5 4.5 0 0 0-4.47 4.07A3.5 3.5 0 0 0 4 10.5 3.5 3.5 0 0 0 7.37 14H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.37A3.5 3.5 0 0 0 20 10.5 3.5 3.5 0 0 0 16.47 7.07 4.5 4.5 0 0 0 12 3zm-5 13h10v2H7v-2z" />
            </svg>
            <span className="whitespace-nowrap">Made From Scratch</span>
          </div>
          {/* Item 3 */}
          <div className="flex items-center justify-center gap-1.5 px-1 border-t sm:border-t-0 sm:border-l border-[#C8BAA3] pt-1.5 sm:pt-0">
            <Utensils className="w-3.5 h-3.5 text-[#18352A] shrink-0" />
            <span className="whitespace-nowrap">Made to Order</span>
          </div>
          {/* Item 4 */}
          <div className="flex items-center justify-center gap-1.5 px-1 border-t sm:border-t-0 sm:border-l border-[#C8BAA3] pt-1.5 sm:pt-0">
            <MapPin className="w-3.5 h-3.5 text-[#18352A] shrink-0" />
            <span className="truncate" title="Serving the Chicagoland Area">Chicagoland Area</span>
          </div>
        </div>
      </div>
    </header>
  );
};
