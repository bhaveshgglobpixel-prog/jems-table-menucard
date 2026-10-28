import React, { useState } from 'react';
import { X, Users, Utensils, AlertCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PortionCalculatorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState<number>(30);

  if (!isOpen) return null;

  // Half pan = ~16 servings (15-18)
  // Full pan = ~32 servings (30-36)
  const recommendedHalfPans = Math.ceil(guests / 16);
  const recommendedFullPans = Math.ceil(guests / 32);

  // Notice days required based on menu guidelines:
  let noticeDays = 5;
  if (guests >= 100) {
    noticeDays = 14;
  } else if (guests >= 50) {
    noticeDays = 7;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#FAF6EC] border border-[#DE6B35]/40 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#103B2B] px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#DE6B35]" />
            <h3 className="font-playfair font-bold text-base sm:text-lg text-[#F7F4EB]">
              Catering Portion Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-sm text-[#1F2421]">
          {/* Guest Count Slider */}
          <div className="bg-white p-4 rounded-lg border border-[#E5DCCB] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#103B2B] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#DE6B35]" /> Your Expected Guests
              </span>
              <span className="font-bold text-lg text-[#103B2B] px-3 py-0.5 rounded bg-[#103B2B]/10">
                {guests} Guests
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-[#DE6B35] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
              <span>10 guests</span>
              <span>50 guests</span>
              <span>100 guests</span>
              <span>200 guests</span>
            </div>
          </div>

          {/* Sizing Recommendations */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#103B2B] text-white p-3.5 rounded-lg text-center">
              <p className="text-xs text-[#DE6B35] font-semibold tracking-wide uppercase">
                Half Pans Needed
              </p>
              <p className="font-cinzel text-2xl font-bold my-1 text-[#F7F4EB]">
                {recommendedHalfPans}
              </p>
              <p className="text-[11px] text-white/80">
                Serves ~{recommendedHalfPans * 16} portions
              </p>
            </div>
            <div className="bg-[#DE6B35] text-white p-3.5 rounded-lg text-center">
              <p className="text-xs text-white/90 font-semibold tracking-wide uppercase">
                Or Full Pans
              </p>
              <p className="font-cinzel text-2xl font-bold my-1 text-white">
                {recommendedFullPans}
              </p>
              <p className="text-[11px] text-white/90">
                Serves ~{recommendedFullPans * 32} portions
              </p>
            </div>
          </div>

          {/* Official Rule Callout */}
          <div className="bg-[#103B2B]/5 border border-[#103B2B]/20 rounded-lg p-3 text-xs space-y-1.5 text-[#103B2B]">
            <p className="font-semibold flex items-center gap-1.5 text-[#103B2B]">
              <AlertCircle className="w-4 h-4 text-[#DE6B35]" />
              Official Menu Standard:
            </p>
            <p className="italic">
              &quot;Half pans serve approximately 15 to 18 people. Serving amounts vary by item and portion size. Other meat selections are quoted based on the selection and current market cost.&quot;
            </p>
          </div>

          {/* Notice Required Timeline */}
          <div className="bg-white p-3 rounded-lg border border-[#E5DCCB] text-xs space-y-1">
            <span className="font-semibold text-[#103B2B]">Required Advance Notice:</span>
            <p className="text-gray-700">
              For <strong>{guests} guests</strong>, please place orders at least{' '}
              <span className="font-bold text-[#DE6B35]">{noticeDays} calendar days</span> in advance.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF6EC] border-t border-[#E5DCCB] p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#103B2B] hover:bg-[#0c2f22] rounded-md transition cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
