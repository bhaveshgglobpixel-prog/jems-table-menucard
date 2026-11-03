import React from 'react';
import { Mail, CalendarCheck } from 'lucide-react';

interface InquiryFooterProps {
  onOpenInquiryModal?: () => void;
  onOpenQrModal?: () => void;
}

export const InquiryFooter: React.FC<InquiryFooterProps> = ({
  onOpenInquiryModal,
  onOpenQrModal,
}) => {
  return (
    <footer className="mt-8 mb-6 px-1">
      {/* Dark Forest Green Inquiries Container */}
      <div className="bg-[#0C382E] rounded-2xl p-4 sm:p-5 border-2 border-[#DF6921] shadow-md text-white">
        {/* Script Title */}
        <h3 className="text-2xl sm:text-3xl font-script text-[#DF6921] text-center sm:text-left mb-3">
          Order and Event Inquiries
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Email Lockup */}
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <a
              href="mailto:bookings@jemstable.com?subject=Jems%20Table%20Catering%20Inquiry"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#FAF3E6] hover:text-[#DF6921] transition-colors py-1.5 px-2 rounded-lg bg-[#144438]/60 hover:bg-[#144438]"
            >
              <div className="p-1 rounded bg-[#DF6921] text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-semibold underline decoration-dotted underline-offset-2">
                bookings@jemstable.com
              </span>
            </a>

            {/* Interactive Catering Inquiry Button */}
            {onOpenInquiryModal && (
              <button
                type="button"
                onClick={onOpenInquiryModal}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#DF6921] hover:bg-[#c95916] transition-colors py-2 px-3 rounded-lg shadow-sm cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Start Catering Inquiry</span>
              </button>
            )}
          </div>

          {/* Right QR Code Box */}
          <div
            onClick={onOpenQrModal}
            className="flex flex-col items-center shrink-0 cursor-pointer group"
            title="Click to enlarge QR Code"
          >
            <div className="p-1 bg-[#FAF3E6] rounded-xl border-2 border-[#DF6921] shadow-xs group-hover:scale-105 transition-transform duration-200">
              <img
                src="/assets/extracted/qr_block.png"
                alt="Scan to order QR code"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg"
              />
            </div>
            <span className="text-[10px] font-bold tracking-wider text-[#FAF3E6] uppercase mt-1 bg-[#092B23] px-2 py-0.5 rounded-full border border-[#DF6921]/40">
              Scan to order
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Copyright & Brand Note */}
      <p className="text-center text-[10px] sm:text-xs text-[#0C382E]/70 mt-4 mb-2 font-medium">
        © JEMS TABLE · Chicagoland Catering & Events · Thoughtfully Prepared & Joyfully Shared
      </p>
    </footer>
  );
};
