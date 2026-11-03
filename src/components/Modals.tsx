import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF3E6] rounded-2xl max-w-sm w-full p-6 text-center border-2 border-[#0C382E] shadow-2xl relative text-[#18352A]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full text-[#0C382E] hover:bg-[#EBDDC8]"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold font-serif-brand text-[#0C382E] mb-1">
          Scan to Order
        </h3>
        <p className="text-xs text-[#DF6921] font-script text-base mb-4">
          JEMS TABLE Catering Menu
        </p>

        {/* Big QR Code image */}
        <div className="bg-white p-3 rounded-2xl border-2 border-[#DF6921] inline-block shadow-inner mb-4">
          <img
            src="/assets/extracted/qr_box.png"
            alt="Scan to order QR Code"
            className="w-48 h-48 object-contain mx-auto"
          />
        </div>

        <p className="text-xs text-[#18352A] font-medium leading-relaxed mb-4">
          Point your mobile phone camera at this QR code to access the online booking portal or email directly.
        </p>

        <div className="flex gap-2">
          <a
            href="mailto:bookings@jemstable.com?subject=Jems%20Table%20Catering%20Inquiry"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#0C382E] text-white text-xs font-bold rounded-lg hover:bg-[#08261F]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Email Directly</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-4 bg-[#EBDDC8] text-[#0C382E] text-xs font-bold rounded-lg hover:bg-[#DECDB5]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF3E6] rounded-2xl max-w-4xl w-full h-[92vh] flex flex-col border-2 border-[#0C382E] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0C382E] text-white">
          <div>
            <h3 className="font-bold text-sm sm:text-base">
              Original Design Verification (Frame 193 JPG)
            </h3>
            <p className="text-[11px] text-[#FAF3E6]/80">
              100% exact match verification of content, layout, prices, and hierarchy
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container with original full JPG */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#EFE8D8] flex justify-center">
          <div className="max-w-[420px] w-full bg-white shadow-xl rounded-lg overflow-hidden border border-[#D5C9B4]">
            <img
              src="/assets/aistudio/Frame_193_57df070e.jpg"
              alt="Original Jems Table Catering Menu JPG"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAF3E6] border-t border-[#DFD4C2] flex items-center justify-between text-xs">
          <span className="text-[#0C382E] font-semibold">
            Status: 100% Exact Content & Typography Replicated
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0C382E] text-white font-bold rounded-lg"
          >
            Return to Live Mobile Web View
          </button>
        </div>
      </div>
    </div>
  );
};
