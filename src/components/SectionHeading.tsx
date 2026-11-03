import React from 'react';

interface SectionHeadingProps {
  title: string;
  id?: string;
  showLeafRight?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  id,
  showLeafRight = false,
}) => {
  return (
    <div id={id} className="relative text-center my-6 scroll-mt-20">
      {/* Script Title */}
      <h3 className="text-3xl sm:text-4xl font-normal text-[#0C382E] font-script tracking-wide inline-block relative">
        {title}
        {/* Warm Orange Stroke Underline */}
        <span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/5 h-[3px] bg-[#DF6921] rounded-full opacity-90"
          aria-hidden="true"
        />
      </h3>

      {/* Decorative leaf if specified (as seen next to Desserts) */}
      {showLeafRight && (
        <img
          src="/assets/extracted/leaf_dessert.png"
          alt=""
          aria-hidden="true"
          className="absolute -right-3 -top-4 w-12 sm:w-16 pointer-events-none select-none opacity-90"
        />
      )}
    </div>
  );
};
