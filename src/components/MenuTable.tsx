import React from 'react';
import { MenuItemTwoTier, MenuItemSingleTier } from '../data/menuData';

interface MenuTableTwoTierProps {
  items: MenuItemTwoTier[];
  selectedItem?: string | null;
  onSelectItem?: (name: string) => void;
}

export const MenuTableTwoTier: React.FC<MenuTableTwoTierProps> = ({
  items,
  selectedItem,
  onSelectItem,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#DFD4C2] shadow-xs my-3 bg-[#FAF3E6]">
      {/* Table Header Bar */}
      <div className="bg-[#0C382E] text-white px-3 sm:px-4 py-2 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase">
        <span className="opacity-0 pointer-events-none select-none">ITEM</span>
        <div className="flex items-center gap-6 sm:gap-10 pr-2">
          <span className="w-16 sm:w-20 text-center">HALF PAN</span>
          <span className="w-16 sm:w-20 text-right">FULL PAN</span>
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-[#E9DECD]">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const isSelected = selectedItem === item.name;

          return (
            <div
              key={item.name}
              onClick={() => onSelectItem?.(item.name)}
              className={`flex items-center justify-between px-3 sm:px-4 py-2.5 transition-colors cursor-pointer select-none ${
                isSelected
                  ? 'bg-[#EADECA]'
                  : isEven
                  ? 'bg-[#FAF3E6] hover:bg-[#F3E8D7]'
                  : 'bg-[#F4ECE0] hover:bg-[#ECE0D0]'
              }`}
            >
              {/* Item Name */}
              <span className="text-xs sm:text-sm font-semibold text-[#18352A] pr-2 leading-tight">
                {item.name}
              </span>

              {/* Pan Prices */}
              <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-2 font-medium text-xs sm:text-sm text-[#18352A] tabular-nums">
                <span className="w-16 sm:w-20 text-center font-semibold">
                  {item.halfPan}
                </span>
                <span className="w-16 sm:w-20 text-right font-semibold">
                  {item.fullPan}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface MenuTableSingleTierProps {
  items: MenuItemSingleTier[];
  selectedItem?: string | null;
  onSelectItem?: (name: string) => void;
}

export const MenuTableSingleTier: React.FC<MenuTableSingleTierProps> = ({
  items,
  selectedItem,
  onSelectItem,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#DFD4C2] shadow-xs my-3 bg-[#FAF3E6]">
      {/* Table Header Bar */}
      <div className="bg-[#0C382E] text-white px-3 sm:px-4 py-2 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase">
        <span className="opacity-0 pointer-events-none select-none">ITEM</span>
        <span className="text-right pr-2">PRICE</span>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-[#E9DECD]">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const isSelected = selectedItem === item.name;

          return (
            <div
              key={item.name}
              onClick={() => onSelectItem?.(item.name)}
              className={`flex items-center justify-between px-3 sm:px-4 py-2.5 transition-colors cursor-pointer select-none ${
                isSelected
                  ? 'bg-[#EADECA]'
                  : isEven
                  ? 'bg-[#FAF3E6] hover:bg-[#F3E8D7]'
                  : 'bg-[#F4ECE0] hover:bg-[#ECE0D0]'
              }`}
            >
              {/* Item Name */}
              <span className="text-xs sm:text-sm font-semibold text-[#18352A] pr-2 leading-tight">
                {item.name}
              </span>

              {/* Single Price / Description */}
              <div className="shrink-0 pr-2 font-semibold text-xs sm:text-sm text-[#18352A] text-right">
                {item.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
