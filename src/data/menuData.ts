export interface MenuItem {
  id: string;
  name: string;
  halfPan?: string;
  fullPan?: string;
  price?: string;
  note?: string;
  hasIntroPricing?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  type: 'two-column' | 'single-column' | 'meats';
  items: MenuItem[];
  noticeBox?: { text: string };
  footnote?: string;
  callout?: { text: string; highlight?: string; heart?: boolean };
}

export interface OrderingStep {
  num: number;
  title: string;
  description: string;
}

export interface MenuDataStructure {
  restaurantName: string;
  tagline: string;
  badge: string;
  subtitle: string;
  highlights: { label: string; icon: string }[];
  sections: MenuSection[];
  orderingInformation: OrderingStep[];
  contact: {
    title: string;
    email: string;
    qrLabel: string;
  };
}

export const MENU_DATA: MenuDataStructure = {
  restaurantName: 'JEMS TABLE',
  tagline: 'Thoughtfully Prepared and Joyfully Shared',
  badge: 'CATERING',
  subtitle: 'MENU',
  highlights: [
    { label: 'Family Owned', icon: 'users' },
    { label: 'Made From Scratch', icon: 'chef-hat' },
    { label: 'Made to Order', icon: 'utensils' },
    { label: 'Serving the Chicagoland Area', icon: 'map-pin' },
  ],
  sections: [
    {
      id: 'signature-favorites',
      title: 'Signature Favorites',
      type: 'two-column',
      items: [
        { id: 'sig-1', name: 'Signature Spaghetti', halfPan: '$65', fullPan: '$120' },
        { id: 'sig-2', name: 'Southern Baked Mac and Cheese', halfPan: '$65', fullPan: '$120' },
        { id: 'sig-3', name: 'Shrimp Scampi', halfPan: '$95', fullPan: '$175' },
        { id: 'sig-4', name: 'Southern Greens with Smoked Turkey', halfPan: '$60', fullPan: '$110' },
        { id: 'sig-5', name: 'Southern Fried Chicken', halfPan: '$65*', fullPan: '$140', hasIntroPricing: true },
        { id: 'sig-6', name: 'BBQ Ribs', halfPan: '$90', fullPan: '$170' },
        { id: 'sig-7', name: 'Cornbread Dressing', halfPan: '$55', fullPan: '$100' },
      ],
      callout: {
        text: 'Good Food — Brings People Together',
        highlight: 'Brings People Together',
      },
    },
    {
      id: 'entrees',
      title: 'Entrees',
      type: 'two-column',
      items: [
        { id: 'ent-1', name: 'Baked Chicken', halfPan: '$60*', fullPan: '$130', hasIntroPricing: true },
        { id: 'ent-2', name: 'BBQ Chicken', halfPan: '$75', fullPan: '$140' },
        { id: 'ent-3', name: 'Smothered Chicken', halfPan: '$80', fullPan: '$150' },
        { id: 'ent-4', name: 'Meatloaf', halfPan: '$75', fullPan: '$140' },
        { id: 'ent-5', name: 'Pot Roast', halfPan: '$85*', fullPan: '$180', hasIntroPricing: true },
        { id: 'ent-6', name: 'Turkey Wings', halfPan: '$85', fullPan: '$160' },
        { id: 'ent-7', name: 'Fried Catfish', halfPan: '$90', fullPan: '$170' },
        { id: 'ent-8', name: 'Ham', halfPan: '$65*', fullPan: 'Quoted', hasIntroPricing: true },
      ],
      noticeBox: {
        text: 'Half pans serve approximately 15 to 18 people. Serving amounts vary by item and portion size. Other meat selections are quoted based on the selection and current market cost.',
      },
      footnote:
        '*Limited-time introductory pricing applies to select half-pan items and Old School Butter Cookies. All prices are subject to change based on ingredient costs and market availability. Final pricing will be confirmed before an order is accepted.',
    },
    {
      id: 'sides-and-salads',
      title: 'Sides and Salads',
      type: 'two-column',
      items: [
        { id: 'side-1', name: 'Candied Yams', halfPan: '$50', fullPan: '$90' },
        { id: 'side-2', name: 'Green Beans with Smoked Turkey', halfPan: '$50', fullPan: '$90' },
        { id: 'side-3', name: 'Cabbage', halfPan: '$45', fullPan: '$80' },
        { id: 'side-4', name: 'Baked Beans', halfPan: '$50', fullPan: '$90' },
        { id: 'side-5', name: 'Mashed Potatoes and Gravy', halfPan: '$45', fullPan: '$80' },
        { id: 'side-6', name: 'Potato Salad', halfPan: '$50', fullPan: '$90' },
        { id: 'side-7', name: 'Pasta Salad', halfPan: '$50', fullPan: '$90' },
        { id: 'side-8', name: 'Tossed Garden Salad', halfPan: '$40', fullPan: '$70' },
      ],
    },
    {
      id: 'desserts',
      title: 'Desserts',
      type: 'single-column',
      items: [
        { id: 'des-1', name: 'Traditional Spiral Pound Cake', price: '$45 whole' },
        { id: 'des-2', name: 'Lemon Spiral Pound Cake', price: '$50 whole' },
        { id: 'des-3', name: 'Peach Cobbler', price: '$50 half | $90 full' },
        { id: 'des-4', name: 'Apple Pie', price: '$30 whole' },
        { id: 'des-5', name: 'Sweet Potato Pie', price: '$30 whole' },
        { id: 'des-6', name: 'Banana Pudding', price: '$50 half | $90 full' },
        { id: 'des-7', name: 'Old School Butter Cookies', price: '$10 per dozen*', hasIntroPricing: true },
      ],
      callout: {
        text: 'Sweet Finishes — Happy Moments',
        heart: true,
      },
    },
    {
      id: 'meats-and-special-orders',
      title: 'Meats and Special Orders',
      type: 'single-column',
      items: [
        { id: 'meat-1', name: 'Whole Oven Roasted Turkey', price: 'Starting at $100' },
        { id: 'meat-2', name: 'Whole Fried Turkey', price: 'Starting at $125' },
        { id: 'meat-3', name: 'Whole Baked Ham', price: 'Starting at $90' },
        { id: 'meat-4', name: 'Other Meats and Custom Dishes', price: 'Quoted individually' },
      ],
    },
  ],
  orderingInformation: [
    {
      num: 1,
      title: 'Regular orders',
      description:
        "Please place orders at least 5 calendar days in advance. Orders requested with less than 5 days' notice are subject to availability.",
    },
    {
      num: 2,
      title: '50 or more servings',
      description: 'Place orders at least 7 calendar days in advance.',
    },
    {
      num: 3,
      title: '100 or more servings',
      description: 'Place orders at least 14 calendar days in advance.',
    },
    {
      num: 4,
      title: 'Rush requests',
      description:
        "Requests made with less than 72 hours' notice are subject to availability and a $25 rush fee. Acceptance is not guaranteed.",
    },
    {
      num: 5,
      title: 'Pickup',
      description: 'Complimentary.',
    },
    {
      num: 6,
      title: 'Delivery',
      description:
        '$15 within 10 miles. $25 for 11 to 20 miles. Delivery beyond 20 miles is quoted individually.',
    },
    {
      num: 7,
      title: 'Packaging',
      description: 'Individual meal packaging is available for an additional fee.',
    },
    {
      num: 8,
      title: 'Sales tax',
      description: 'Applicable sales tax will be added to all orders.',
    },
  ],
  contact: {
    title: 'Order and Event Inquiries',
    email: 'bookings@jemstable.com',
    qrLabel: 'Scan to order',
  },
};
