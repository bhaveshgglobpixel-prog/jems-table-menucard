import React from 'react';

export const GoodFoodCallout: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4 my-6 py-2 px-1">
      {/* Calligraphy Quote Text */}
      <div className="flex-1 text-center sm:text-left pl-2">
        <div className="inline-block transform -rotate-3 text-center">
          <p className="text-2xl sm:text-3xl text-[#0C382E] font-script font-bold leading-none">
            Good Food
          </p>
          <div className="flex items-center justify-center gap-1 my-0.5">
            <span className="text-[#DF6921] font-bold text-xs tracking-tighter">/ /</span>
            <p className="text-xl sm:text-2xl text-[#DF6921] font-script font-bold leading-none">
              Brings People
            </p>
            <span className="text-[#DF6921] font-bold text-xs tracking-tighter">\ \</span>
          </div>
          <p className="text-2xl sm:text-3xl text-[#0C382E] font-script font-bold leading-none">
            Together
          </p>
        </div>
      </div>

      {/* Circular Food Image with Orange Ring */}
      <div className="relative shrink-0 w-36 h-36 sm:w-44 sm:h-44">
        {/* Decorative brush circle */}
        <div className="absolute inset-0 rounded-full border-3 border-[#DF6921] shadow-md overflow-hidden bg-[#E7DCBF]">
          <img
            src="/assets/extracted/bbq_dish.png"
            alt="BBQ Ribs, Mac & Cheese, and Greens Catering Pan"
            className="w-full h-full object-cover scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export const SweetFinishesCallout: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4 my-6 py-2 px-1">
      {/* Circular Dessert Image with Orange Ring */}
      <div className="relative shrink-0 w-36 h-36 sm:w-44 sm:h-44">
        <div className="absolute inset-0 rounded-full border-3 border-[#DF6921] shadow-md overflow-hidden bg-[#E7DCBF]">
          <img
            src="/assets/extracted/dessert_dish.png"
            alt="Jems Table Assorted Desserts, Pies, and Cakes"
            className="w-full h-full object-cover scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Calligraphy Quote Text */}
      <div className="flex-1 text-center sm:text-left pr-2">
        <div className="inline-block transform rotate-2 text-center">
          <p className="text-2xl sm:text-3xl text-[#0C382E] font-script font-bold leading-none">
            Sweet
          </p>
          <p className="text-2xl sm:text-3xl text-[#0C382E] font-script font-bold leading-none">
            Finishes
          </p>
          <div className="flex items-center justify-center gap-1 my-0.5">
            <span className="text-[#DF6921] font-bold text-xs tracking-tighter">&gt;</span>
            <p className="text-xl sm:text-2xl text-[#DF6921] font-script font-bold leading-none">
              Happy
            </p>
            <span className="text-[#DF6921] font-bold text-xs tracking-tighter">&lt;</span>
          </div>
          <p className="text-2xl sm:text-3xl text-[#DF6921] font-script font-bold leading-none">
            Moments
          </p>
          {/* Heart Doodle */}
          <div className="flex justify-center mt-1">
            <span className="text-2xl sm:text-3xl text-[#0C382E] font-script font-black leading-none inline-block transform -rotate-12">
              ♡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
