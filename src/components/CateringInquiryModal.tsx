import React, { useState } from 'react';
import { X, Mail, Copy, Check, Calendar, Users, Send } from 'lucide-react';
import { MENU_DATA } from '../data/menuData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: string;
}

export const CateringInquiryModal: React.FC<Props> = ({
  isOpen,
  onClose,
  preselectedItem,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState('25');
  const [eventDate, setEventDate] = useState('');
  const [serviceType, setServiceType] = useState<'pickup' | 'delivery'>('pickup');
  const [notes, setNotes] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>(
    preselectedItem ? [preselectedItem] : []
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const toggleItem = (itemName: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((i) => i !== itemName)
        : [...prev, itemName]
    );
  };

  const emailSubject = encodeURIComponent(
    `Catering Inquiry - Jems Table (${eventDate ? eventDate : 'Upcoming Event'})`
  );

  const emailBodyText = `Hello Jems Table Catering Team,

I would like to inquire about catering for an upcoming event:

• Contact Name: ${name || 'N/A'}
• Phone Number: ${phone || 'N/A'}
• Event Date: ${eventDate || 'To be decided'}
• Estimated Guest Count: ${guestCount} guests
• Service Preference: ${serviceType === 'delivery' ? 'Delivery (Chicagoland)' : 'Pickup (Complimentary)'}

Items of Interest:
${selectedItems.length > 0 ? selectedItems.map((item) => ` - ${item}`).join('\n') : ' - To be finalized'}

Special Requests / Notes:
${notes || 'None'}

Thank you!`;

  const emailHref = `mailto:${MENU_DATA.contact.email}?subject=${emailSubject}&body=${encodeURIComponent(
    emailBodyText
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailBodyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#FAF6EC] border border-[#DE6B35]/40 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#103B2B] px-5 py-4 text-white flex items-center justify-between">
          <div>
            <h3 className="font-playfair font-bold text-lg text-[#F7F4EB]">
              Catering Order Inquiry
            </h3>
            <p className="text-xs text-[#DE6B35]">
              Direct to {MENU_DATA.contact.email}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-sm text-[#1F2421]">
          <div className="bg-[#103B2B]/5 border border-[#103B2B]/15 rounded-lg p-3 text-xs text-[#103B2B]">
            <p className="font-semibold mb-1">📅 Notice Reminder:</p>
            <p>
              Please place regular orders at least <strong>5 calendar days</strong> in advance. For 50+ guests, place orders at least 7 days ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#103B2B] mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-3 py-2 bg-white border border-[#E5DCCB] rounded-md focus:outline-none focus:border-[#103B2B] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#103B2B] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(312) 555-0199"
                className="w-full px-3 py-2 bg-white border border-[#E5DCCB] rounded-md focus:outline-none focus:border-[#103B2B] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#103B2B] mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5DCCB] rounded-md focus:outline-none focus:border-[#103B2B] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#103B2B] mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Estimated Guests
              </label>
              <input
                type="number"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                min="5"
                max="500"
                className="w-full px-3 py-2 bg-white border border-[#E5DCCB] rounded-md focus:outline-none focus:border-[#103B2B] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#103B2B] mb-1">
              Service Preference
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-xs">
                <input
                  type="radio"
                  name="service"
                  checked={serviceType === 'pickup'}
                  onChange={() => setServiceType('pickup')}
                  className="accent-[#103B2B]"
                />
                Pickup (Complimentary)
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-xs">
                <input
                  type="radio"
                  name="service"
                  checked={serviceType === 'delivery'}
                  onChange={() => setServiceType('delivery')}
                  className="accent-[#103B2B]"
                />
                Delivery (Chicagoland)
              </label>
            </div>
          </div>

          {/* Quick Item Picker */}
          <div>
            <label className="block text-xs font-semibold text-[#103B2B] mb-1">
              Interested Dishes (Optional)
            </label>
            <div className="max-h-36 overflow-y-auto border border-[#E5DCCB] bg-white rounded-md p-2 space-y-1">
              {MENU_DATA.sections.flatMap((sec) => sec.items).map((item: { id: string; name: string }) => {
                const checked = selectedItems.includes(item.name);
                return (
                  <label
                    key={item.id}
                    className={`flex items-center justify-between text-xs px-2 py-1 rounded cursor-pointer transition ${
                      checked
                        ? 'bg-[#103B2B]/10 font-semibold text-[#103B2B]'
                        : 'hover:bg-black/5 text-[#1F2421]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleItem(item.name)}
                      className="accent-[#103B2B] ml-2"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#103B2B] mb-1">
              Additional Notes / Requests
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific delivery instructions, dietary notes, or preferred times..."
              className="w-full px-3 py-2 bg-white border border-[#E5DCCB] rounded-md focus:outline-none focus:border-[#103B2B] text-xs resize-none"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#FAF6EC] border-t border-[#E5DCCB] p-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-2 text-xs font-medium text-[#103B2B] bg-white border border-[#103B2B]/30 hover:bg-[#103B2B]/5 rounded-md flex items-center gap-1.5 transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied Text' : 'Copy Message'}
          </button>

          <a
            href={emailHref}
            className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-[#103B2B] hover:bg-[#0c2f22] rounded-md shadow flex items-center justify-center gap-2 transition cursor-pointer text-center"
          >
            <Send className="w-3.5 h-3.5" />
            Launch Email to {MENU_DATA.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
};
