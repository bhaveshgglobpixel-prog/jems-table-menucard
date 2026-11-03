import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import {
  SIGNATURE_FAVORITES,
  ENTREES,
  SIDES_AND_SALADS,
  DESSERTS,
  MEATS_SPECIAL_ORDERS,
} from '../data/menuData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string | null;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedItem,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [serviceType, setServiceType] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedItems, setSelectedItems] = useState<string[]>(
    preselectedItem ? [preselectedItem] : []
  );
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const allItems = [
    ...SIGNATURE_FAVORITES.map((i) => `${i.name} (${i.halfPan} half / ${i.fullPan} full)`),
    ...ENTREES.map((i) => `${i.name} (${i.halfPan} half / ${i.fullPan} full)`),
    ...SIDES_AND_SALADS.map((i) => `${i.name} (${i.halfPan} half / ${i.fullPan} full)`),
    ...DESSERTS.map((i) => `${i.name} (${i.price})`),
    ...MEATS_SPECIAL_ORDERS.map((i) => `${i.name} (${i.price})`),
  ];

  const handleToggleItem = (itemText: string) => {
    if (selectedItems.includes(itemText)) {
      setSelectedItems(selectedItems.filter((i) => i !== itemText));
    } else {
      setSelectedItems([...selectedItems, itemText]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Construct mailto link
    const subject = encodeURIComponent(`Catering Inquiry - ${name} (${eventDate})`);
    const body = encodeURIComponent(
      `Hello Jems Table Team,\n\n` +
      `I would like to inquire about catering services:\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Event Date: ${eventDate}\n` +
      `Guest Count: ${guestCount}\n` +
      `Service: ${serviceType === 'delivery' ? 'Delivery' : 'Pickup (Complimentary)'}\n\n` +
      `Selected Items:\n${selectedItems.length > 0 ? selectedItems.map(i => `• ${i}`).join('\n') : 'None selected yet'}\n\n` +
      `Additional Notes / Requests:\n${notes || 'None'}\n\n` +
      `Thank you!`
    );

    // Open mailto
    window.location.href = `mailto:bookings@jemstable.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF3E6] rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-[#0C382E] shadow-2xl p-4 sm:p-6 text-[#18352A]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#DFD4C2] pb-3 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#0C382E]">
              Catering Inquiry
            </h3>
            <p className="text-xs text-[#DF6921] font-script text-base">
              Thoughtfully Prepared and Joyfully Shared
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-[#0C382E] hover:bg-[#EBDDC8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-12 h-12 text-[#0C382E] mx-auto mb-3" />
            <h4 className="text-lg font-bold text-[#0C382E]">Inquiry Draft Prepared!</h4>
            <p className="text-xs sm:text-sm text-[#18352A] mt-2 mb-4 leading-relaxed">
              Your inquiry email has been opened in your mail app. You can also contact directly at{' '}
              <strong className="text-[#DF6921]">bookings@jemstable.com</strong>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-white bg-[#0C382E] rounded-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#0C382E] mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD4C2] focus:outline-[#0C382E]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#0C382E] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD4C2] focus:outline-[#0C382E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-[#0C382E] mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(312) 555-0199"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD4C2] focus:outline-[#0C382E]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#0C382E] mb-1">Event Date *</label>
                <input
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD4C2] focus:outline-[#0C382E]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#0C382E] mb-1">Est. Guests</label>
                <input
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  placeholder="e.g. 35"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD4C2] focus:outline-[#0C382E]"
                />
              </div>
            </div>

            {/* Service Type Selection */}
            <div>
              <label className="block font-semibold text-[#0C382E] mb-1">Fulfillment Option</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setServiceType('pickup')}
                  className={`flex-1 py-1.5 px-3 rounded-lg font-medium border text-xs ${
                    serviceType === 'pickup'
                      ? 'bg-[#0C382E] text-white border-[#0C382E]'
                      : 'bg-white text-[#18352A] border-[#DFD4C2]'
                  }`}
                >
                  Pickup (Complimentary)
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('delivery')}
                  className={`flex-1 py-1.5 px-3 rounded-lg font-medium border text-xs ${
                    serviceType === 'delivery'
                      ? 'bg-[#0C382E] text-white border-[#0C382E]'
                      : 'bg-white text-[#18352A] border-[#DFD4C2]'
                  }`}
                >
                  Delivery ($15-$25+ in Chicagoland)
                </button>
              </div>
            </div>

            {/* Menu Items of Interest */}
            <div>
              <label className="block font-semibold text-[#0C382E] mb-1">
                Select Menu Dishes (Optional)
              </label>
              <div className="max-h-36 overflow-y-auto p-2 bg-white rounded-lg border border-[#DFD4C2] space-y-1.5 text-xs">
                {allItems.map((dish) => (
                  <label
                    key={dish}
                    className="flex items-center gap-2 cursor-pointer hover:bg-[#FAF4E8] p-1 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(dish)}
                      onChange={() => handleToggleItem(dish)}
                      className="accent-[#0C382E]"
                    />
                    <span className="truncate">{dish}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-semibold text-[#0C382E] mb-1">
                Additional Notes or Dietary Questions
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Specific timings, half/full pan count, or special requests..."
                className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD4C2] focus:outline-[#0C382E]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0C382E] hover:bg-[#08261F] text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#DF6921]" />
                <span>Submit Inquiry to Jems Table</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
