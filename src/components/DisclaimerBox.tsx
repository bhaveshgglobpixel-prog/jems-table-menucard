import React from 'react';
import { NOTICE_BOX_TEXT, DISCLAIMER_NOTE } from '../data/menuData';

export const DisclaimerBox: React.FC = () => {
  return (
    <div className="my-5 px-1">
      {/* Dark Forest Green Notice Box */}
      <div className="bg-[#0C382E] text-white rounded-xl p-3.5 sm:p-4.5 flex items-center gap-3 sm:gap-4 shadow-sm border border-[#164C3E]">
        {/* Chef Hat Icon */}
        <div className="shrink-0 p-1.5 text-[#DF6921]">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 3a4.5 4.5 0 0 0-4.47 4.07A3.5 3.5 0 0 0 4 10.5 3.5 3.5 0 0 0 7.37 14H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.37A3.5 3.5 0 0 0 20 10.5 3.5 3.5 0 0 0 16.47 7.07 4.5 4.5 0 0 0 12 3zm-5 13h10v2H7v-2z" />
          </svg>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1.5px] h-14 bg-[#DF6921] shrink-0 opacity-80" />

        {/* Notice Prose */}
        <p className="text-xs sm:text-[13px] leading-relaxed text-[#F3EAD9] font-normal italic">
          {NOTICE_BOX_TEXT}
        </p>
      </div>

      {/* Asterisk Fine Print */}
      <p className="mt-3 text-[11px] sm:text-xs font-semibold italic text-[#0C382E] leading-relaxed px-1 text-center sm:text-left">
        {DISCLAIMER_NOTE}
      </p>
    </div>
  );
};
