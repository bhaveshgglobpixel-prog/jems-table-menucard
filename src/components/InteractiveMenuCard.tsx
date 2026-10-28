import React from 'react';
import {
  Users,
  ChefHat,
  UtensilsCrossed,
  MapPin,
  Mail,
  Heart,
} from 'lucide-react';
import { MENU_DATA } from '../data/menuData';
import {
  TopLeftLeaves,
  TopRightLeaves,
  MidRightLeaves,
  DecorativeWaveBanner,
  OrangeAccentUnderline,
} from './BotanicalAccents';
import { MasterImageCrop } from './MenuImageCrops';

interface Props {
  searchQuery?: string;
  onOpenInquiry?: (item?: string) => void;
  onOpenCalculator?: () => void;
}

export const InteractiveMenuCard: React.FC<Props> = ({
  searchQuery = '',
  onOpenInquiry,
  onOpenCalculator,
}) => {
  const query = searchQuery.trim().toLowerCase();

  const isMatching = (name: string) => {
    if (!query) return true;
    return name.toLowerCase().includes(query);
  };

  return (
    <div
      id="printable-menu-card"
      className="print-card-wrapper relative w-full max-w-[760px] mx-auto bg-[#FAF6EC] text-[#1F2421] shadow-2xl transition-all duration-300 overflow-hidden font-sans-body border border-[#E5DCCB]/60"
    >
      {/* Decorative Corner Foliage */}
      <TopLeftLeaves className="absolute -top-3 -left-3 w-28 sm:w-36 h-auto z-10" />
      <TopRightLeaves className="absolute -top-3 -right-3 w-32 sm:w-40 h-auto z-10" />
      <MidRightLeaves className="absolute top-[48%] -right-2 w-20 sm:w-28 h-auto z-10" />

      {/* HEADER SECTION */}
      <header className="relative pt-10 sm:pt-14 pb-4 px-6 sm:px-12 text-center">
        {/* Brand Bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Logo Badge */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md bg-[#103B2B] flex-shrink-0">
            <MasterImageCrop type="logo" alt="Jems Table Brand Emblem" />
          </div>

          <div className="text-left">
            <h1 className="font-cinzel font-extrabold text-2xl sm:text-3xl tracking-[0.12em] text-[#103B2B] leading-none">
              JEMS TABLE
            </h1>
            <p className="font-alex text-lg sm:text-xl text-[#DE6B35] tracking-wide mt-1">
              Thoughtfully Prepared and Joyfully Shared
            </p>
          </div>
        </div>

        {/* CATERING MENU Title */}
        <div className="my-3 sm:my-5">
          <h2 className="font-cinzel font-black text-3xl sm:text-5xl tracking-[0.16em] text-[#103B2B] leading-tight">
            CATERING
          </h2>
          <div className="flex items-center justify-center gap-3 my-1">
            <div className="h-[1px] w-12 sm:w-20 bg-[#DE6B35]/70" />
            <span className="font-sans-body font-bold text-xs sm:text-sm tracking-[0.25em] text-[#DE6B35] uppercase">
              MENU
            </span>
            <div className="h-[1px] w-12 sm:w-20 bg-[#DE6B35]/70" />
          </div>
        </div>

        {/* Feature Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-4 text-[11px] sm:text-xs font-medium text-[#103B2B] mt-4 pb-2 border-b border-[#E5DCCB]/80">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#103B2B]" />
            <span>Family Owned</span>
          </div>
          <span className="text-[#DE6B35]/50">|</span>
          <div className="flex items-center gap-1.5">
            <ChefHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#103B2B]" />
            <span>Made From Scratch</span>
          </div>
          <span className="text-[#DE6B35]/50 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5">
            <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#103B2B]" />
            <span>Made to Order</span>
          </div>
          <span className="text-[#DE6B35]/50">|</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#103B2B]" />
            <span>Serving the Chicagoland Area</span>
          </div>
        </div>
      </header>

      {/* MAIN MENU CONTENT */}
      <main className="px-5 sm:px-10 pb-8 space-y-9 sm:space-y-12">
        {/* 1. SIGNATURE FAVORITES */}
        <section id="signature-favorites" className="scroll-mt-14">
          <div className="text-center mb-3">
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#103B2B] inline-block relative">
              Signature Favorites
              <OrangeAccentUnderline className="mx-auto mt-0.5" />
            </h3>
          </div>

          {/* Table Header */}
          <div className="bg-[#103B2B] text-white rounded-md px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">
            <span>Item</span>
            <div className="flex gap-6 sm:gap-10 text-right pr-1">
              <span className="w-16 sm:w-20 text-center">HALF PAN</span>
              <span className="w-16 sm:w-20 text-center">FULL PAN</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E5DCCB] text-xs sm:text-sm font-medium">
            {MENU_DATA.sections[0].items.map((item) => {
              const matched = isMatching(item.name);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenInquiry?.(item.name)}
                  className={`group py-2.5 px-3 flex items-center justify-between transition-colors cursor-pointer rounded hover:bg-[#103B2B]/5 ${
                    !matched ? 'opacity-25' : 'opacity-100'
                  }`}
                  title="Click to inquire about this dish"
                >
                  <span className="text-[#1F2421] group-hover:text-[#103B2B] font-semibold pr-2">
                    {item.name}
                  </span>
                  <div className="flex gap-6 sm:gap-10 text-right flex-shrink-0">
                    <span className="w-16 sm:w-20 text-center text-[#1F2421] font-semibold">
                      {item.halfPan}
                    </span>
                    <span className="w-16 sm:w-20 text-center text-[#1F2421] font-semibold">
                      {item.fullPan}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Callout with Food Photo (Ribs) */}
          <div className="mt-5 sm:mt-6 flex flex-row items-center justify-between gap-4 px-2">
            {/* Script Text Note */}
            <div className="flex-1 text-center sm:text-left pl-2 sm:pl-6">
              <div className="font-caveat font-bold text-2xl sm:text-3xl text-[#103B2B] leading-tight">
                <span className="text-xl sm:text-2xl text-[#103B2B]">Good Food</span>
                <br />
                <span className="text-[#DE6B35]">— Brings People</span>
                <br />
                <span className="text-[#103B2B]">Together</span>
              </div>
              {/* Decorative accent dashes */}
              <div className="flex justify-center sm:justify-start gap-1 mt-2 text-[#DE6B35]">
                <span className="h-1 w-3 bg-[#DE6B35] rounded-full rotate-[-20deg]" />
                <span className="h-1 w-4 bg-[#103B2B] rounded-full rotate-[15deg]" />
                <span className="h-1 w-2 bg-[#DE6B35] rounded-full" />
              </div>
            </div>

            {/* Circular Ribs Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-[5px] sm:border-[6px] border-[#DE6B35] shadow-xl overflow-hidden bg-[#FAF6EC]">
                <MasterImageCrop
                  type="ribs"
                  alt="BBQ Ribs, Mac and Cheese, and Cornbread Catering Spread"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. ENTREES */}
        <section id="entrees" className="scroll-mt-14">
          <div className="text-center mb-3">
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#103B2B] inline-block relative">
              Entrees
              <OrangeAccentUnderline className="mx-auto mt-0.5" />
            </h3>
          </div>

          {/* Table Header */}
          <div className="bg-[#103B2B] text-white rounded-md px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">
            <span>Item</span>
            <div className="flex gap-6 sm:gap-10 text-right pr-1">
              <span className="w-16 sm:w-20 text-center">HALF PAN</span>
              <span className="w-16 sm:w-20 text-center">FULL PAN</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E5DCCB] text-xs sm:text-sm font-medium">
            {MENU_DATA.sections[1].items.map((item) => {
              const matched = isMatching(item.name);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenInquiry?.(item.name)}
                  className={`group py-2.5 px-3 flex items-center justify-between transition-colors cursor-pointer rounded hover:bg-[#103B2B]/5 ${
                    !matched ? 'opacity-25' : 'opacity-100'
                  }`}
                  title="Click to inquire about this dish"
                >
                  <span className="text-[#1F2421] group-hover:text-[#103B2B] font-semibold pr-2">
                    {item.name}
                  </span>
                  <div className="flex gap-6 sm:gap-10 text-right flex-shrink-0">
                    <span className="w-16 sm:w-20 text-center text-[#1F2421] font-semibold">
                      {item.halfPan}
                    </span>
                    <span className="w-16 sm:w-20 text-center text-[#1F2421] font-semibold">
                      {item.fullPan}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notice Box (Servings Information) */}
          <div
            onClick={onOpenCalculator}
            className="mt-4 bg-[#103B2B] text-[#FAF6EC] rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-sm cursor-pointer hover:bg-[#0d3124] transition group"
            title="Click to open Pan Serving Calculator"
          >
            <div className="p-2 bg-[#DE6B35] rounded-full text-white flex-shrink-0 group-hover:scale-105 transition-transform">
              <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="border-l border-[#DE6B35]/50 pl-3 sm:pl-4 text-[11px] sm:text-xs leading-relaxed italic text-white/95">
              Half pans serve approximately 15 to 18 people. Serving amounts vary by item and portion size. Other meat selections are quoted based on the selection and current market cost.
            </div>
          </div>

          {/* Pricing Footnote */}
          <p className="mt-2.5 text-[10px] sm:text-[11px] text-[#103B2B] font-medium italic leading-relaxed text-center px-2">
            *Limited-time introductory pricing applies to select half-pan items and Old School Butter Cookies. All prices are subject to change based on ingredient costs and market availability. Final pricing will be confirmed before an order is accepted.
          </p>
        </section>

        {/* 3. SIDES AND SALADS */}
        <section id="sides-and-salads" className="scroll-mt-14">
          <div className="text-center mb-3">
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#103B2B] inline-block relative">
              Sides and Salads
              <OrangeAccentUnderline className="mx-auto mt-0.5" />
            </h3>
          </div>

          {/* Table Header */}
          <div className="bg-[#103B2B] text-white rounded-md px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">
            <span>Item</span>
            <div className="flex gap-6 sm:gap-10 text-right pr-1">
              <span className="w-16 sm:w-20 text-center">HALF PAN</span>
              <span className="w-16 sm:w-20 text-center">FULL PAN</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E5DCCB] text-xs sm:text-sm font-medium">
            {MENU_DATA.sections[2].items.map((item) => {
              const matched = isMatching(item.name);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenInquiry?.(item.name)}
                  className={`group py-2.5 px-3 flex items-center justify-between transition-colors cursor-pointer rounded hover:bg-[#103B2B]/5 ${
                    !matched ? 'opacity-25' : 'opacity-100'
                  }`}
                  title="Click to inquire about this dish"
                >
                  <span className="text-[#1F2421] group-hover:text-[#103B2B] font-semibold pr-2">
                    {item.name}
                  </span>
                  <div className="flex gap-6 sm:gap-10 text-right flex-shrink-0">
                    <span className="w-16 sm:w-20 text-center text-[#1F2421] font-semibold">
                      {item.halfPan}
                    </span>
                    <span className="w-16 sm:w-20 text-center text-[#1F2421] font-semibold">
                      {item.fullPan}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. DESSERTS */}
        <section id="desserts" className="scroll-mt-14">
          <div className="text-center mb-3">
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#103B2B] inline-block relative">
              Desserts
              <OrangeAccentUnderline className="mx-auto mt-0.5" />
            </h3>
          </div>

          {/* Table Header */}
          <div className="bg-[#103B2B] text-white rounded-md px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">
            <span>Item</span>
            <span className="pr-4">PRICE</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E5DCCB] text-xs sm:text-sm font-medium">
            {MENU_DATA.sections[3].items.map((item) => {
              const matched = isMatching(item.name);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenInquiry?.(item.name)}
                  className={`group py-2.5 px-3 flex items-center justify-between transition-colors cursor-pointer rounded hover:bg-[#103B2B]/5 ${
                    !matched ? 'opacity-25' : 'opacity-100'
                  }`}
                  title="Click to inquire about this dessert"
                >
                  <span className="text-[#1F2421] group-hover:text-[#103B2B] font-semibold pr-2">
                    {item.name}
                  </span>
                  <span className="text-[#1F2421] font-semibold text-right flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Callout with Dessert Photo */}
          <div className="mt-5 sm:mt-6 flex flex-row items-center justify-between gap-4 px-2">
            {/* Circular Desserts Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-[5px] sm:border-[6px] border-[#DE6B35] shadow-xl overflow-hidden bg-[#FAF6EC]">
                <MasterImageCrop
                  type="desserts"
                  alt="Bundt cakes, sweet potato pies, cobblers, and southern desserts"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>

            {/* Script Text Note */}
            <div className="flex-1 text-center sm:text-right pr-2 sm:pr-6">
              <div className="font-caveat font-bold text-2xl sm:text-3xl leading-tight">
                <span className="text-[#103B2B]">Sweet Finishes</span>
                <br />
                <span className="text-[#DE6B35]">— Happy Moments</span>
              </div>
              <div className="flex justify-center sm:justify-end items-center gap-1.5 mt-2 text-[#103B2B]">
                <Heart className="w-6 h-6 fill-transparent stroke-[#103B2B] stroke-[2.2]" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. MEATS AND SPECIAL ORDERS */}
        <section id="meats-and-special-orders" className="scroll-mt-14">
          <div className="text-center mb-3">
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#103B2B] inline-block relative">
              Meats and Special Orders
              <OrangeAccentUnderline className="mx-auto mt-0.5" />
            </h3>
          </div>

          {/* Table Header */}
          <div className="bg-[#103B2B] text-white rounded-md px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm">
            <span>Item</span>
            <span className="pr-4">PRICE</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E5DCCB] text-xs sm:text-sm font-medium">
            {MENU_DATA.sections[4].items.map((item) => {
              const matched = isMatching(item.name);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenInquiry?.(item.name)}
                  className={`group py-2.5 px-3 flex items-center justify-between transition-colors cursor-pointer rounded hover:bg-[#103B2B]/5 ${
                    !matched ? 'opacity-25' : 'opacity-100'
                  }`}
                  title="Click to inquire about special order"
                >
                  <span className="text-[#1F2421] group-hover:text-[#103B2B] font-semibold pr-2">
                    {item.name}
                  </span>
                  <span className="text-[#1F2421] font-semibold text-right flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Decorative Wave Divider with Chef Hat & Leaf Sprigs */}
        <DecorativeWaveBanner />

        {/* 6. ORDERING INFORMATION */}
        <section id="ordering-information" className="scroll-mt-14 pt-2">
          <div className="text-center mb-6">
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#103B2B]">
              Ordering Information
            </h3>
          </div>

          {/* Numbered Steps 1 through 8 */}
          <div className="space-y-4 sm:space-y-5 px-1 sm:px-4">
            {MENU_DATA.orderingInformation.map((info) => (
              <div key={info.num} className="flex items-start gap-3.5 sm:gap-4">
                {/* Number Circle Badge */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#103B2B] text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 shadow-sm border border-[#DE6B35]/40">
                  {info.num}
                </div>

                <div className="text-xs sm:text-sm leading-relaxed">
                  <h4 className="font-bold text-[#DE6B35] text-sm sm:text-base">
                    {info.title}
                  </h4>
                  <p className="text-[#1F2421] mt-0.5">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FOOTER CONTACT CARD */}
        <footer id="contact-inquiries" className="pt-4">
          <div className="bg-[#103B2B] text-[#FAF6EC] rounded-xl p-5 sm:p-7 shadow-lg border border-[#DE6B35]/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Left: Heading & Email */}
              <div className="text-center sm:text-left space-y-3">
                <h3 className="font-caveat font-bold text-3xl sm:text-4xl text-[#FF7E29] tracking-wide">
                  Order and Event Inquiries
                </h3>

                <a
                  href={`mailto:${MENU_DATA.contact.email}`}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95 hover:text-[#DE6B35] transition cursor-pointer group"
                >
                  <span className="p-1.5 rounded-md bg-[#DE6B35] text-white group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="underline underline-offset-4 tracking-wider">
                    {MENU_DATA.contact.email}
                  </span>
                </a>
              </div>

              {/* Right: QR Code Box */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white p-2 rounded-lg shadow-md border-2 border-[#DE6B35]/40 flex items-center justify-center">
                  <MasterImageCrop
                    type="qrcode"
                    alt="Scan to Order QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-2.5 px-3 py-1 rounded-full bg-[#FAF6EC] text-[#103B2B] font-bold text-[11px] sm:text-xs tracking-wider shadow uppercase">
                  {MENU_DATA.contact.qrLabel}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
