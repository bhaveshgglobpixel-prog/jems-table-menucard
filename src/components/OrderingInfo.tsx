import React from 'react';
import { ORDERING_POLICIES } from '../data/menuData';

export const OrderingInfo: React.FC = () => {
  return (
    <div id="ordering-info" className="my-6 px-1 scroll-mt-20">
      {/* Decorative Wave Divider Banner */}
      <div className="w-full -mx-1 mb-6 overflow-hidden select-none pointer-events-none">
        <img
          src="/assets/extracted/green_wave_divider.png"
          alt=""
          className="w-full h-auto object-cover object-center max-h-24 sm:max-h-28"
          loading="lazy"
        />
      </div>

      {/* Script Title */}
      <div className="text-center mb-6">
        <h3 className="text-3xl sm:text-4xl font-normal text-[#0C382E] font-script tracking-wide inline-block relative">
          Ordering Information
          <span
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/5 h-[3px] bg-[#DF6921] rounded-full opacity-90"
            aria-hidden="true"
          />
        </h3>
      </div>

      {/* 8 Numbered Policy Points */}
      <div className="space-y-4 max-w-xl mx-auto px-1 sm:px-2">
        {ORDERING_POLICIES.map((policy) => (
          <div key={policy.step} className="flex items-start gap-3 sm:gap-4">
            {/* Number Circle Badge */}
            <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C382E] flex items-center justify-center text-[#DF6921] font-extrabold text-sm sm:text-base shadow-xs mt-0.5">
              <span>{policy.step}</span>
            </div>

            {/* Policy Content */}
            <div className="flex-1">
              <h4 className="text-sm sm:text-base font-bold text-[#DF6921] leading-tight mb-0.5">
                {policy.title}
              </h4>
              <p className="text-xs sm:text-[13px] text-[#18352A] leading-relaxed font-medium">
                {policy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
