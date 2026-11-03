export interface MenuItemTwoTier {
  name: string;
  halfPan: string;
  fullPan: string;
  note?: string;
}

export interface MenuItemSingleTier {
  name: string;
  price: string;
  note?: string;
}

export interface TrustBadge {
  id: string;
  label: string;
  iconName: 'users' | 'chef-hat' | 'utensils' | 'map-pin';
}

export interface OrderingPolicy {
  step: number;
  title: string;
  description: string;
}

export const TRUST_BADGES: TrustBadge[] = [
  { id: 'family', label: 'Family Owned', iconName: 'users' },
  { id: 'scratch', label: 'Made From Scratch', iconName: 'chef-hat' },
  { id: 'order', label: 'Made to Order', iconName: 'utensils' },
  { id: 'area', label: 'Serving the Chicagoland Area', iconName: 'map-pin' },
];

export const SIGNATURE_FAVORITES: MenuItemTwoTier[] = [
  { name: 'Signature Spaghetti', halfPan: '$65', fullPan: '$120' },
  { name: 'Southern Baked Mac and Cheese', halfPan: '$65', fullPan: '$120' },
  { name: 'Shrimp Scampi', halfPan: '$95', fullPan: '$175' },
  { name: 'Southern Greens with Smoked Turkey', halfPan: '$60', fullPan: '$110' },
  { name: 'Southern Fried Chicken', halfPan: '$65*', fullPan: '$140', note: 'introductory pricing applies' },
  { name: 'BBQ Ribs', halfPan: '$90', fullPan: '$170' },
  { name: 'Cornbread Dressing', halfPan: '$55', fullPan: '$100' },
];

export const ENTREES: MenuItemTwoTier[] = [
  { name: 'Baked Chicken', halfPan: '$60*', fullPan: '$130', note: 'introductory pricing applies' },
  { name: 'BBQ Chicken', halfPan: '$75', fullPan: '$140' },
  { name: 'Smothered Chicken', halfPan: '$80', fullPan: '$150' },
  { name: 'Meatloaf', halfPan: '$75', fullPan: '$140' },
  { name: 'Pot Roast', halfPan: '$85*', fullPan: '$180', note: 'introductory pricing applies' },
  { name: 'Turkey Wings', halfPan: '$85', fullPan: '$160' },
  { name: 'Fried Catfish', halfPan: '$90', fullPan: '$170' },
  { name: 'Ham', halfPan: '$65*', fullPan: 'Quoted', note: 'introductory pricing applies' },
];

export const SIDES_AND_SALADS: MenuItemTwoTier[] = [
  { name: 'Candied Yams', halfPan: '$50', fullPan: '$90' },
  { name: 'Green Beans with Smoked Turkey', halfPan: '$50', fullPan: '$90' },
  { name: 'Cabbage', halfPan: '$45', fullPan: '$80' },
  { name: 'Baked Beans', halfPan: '$50', fullPan: '$90' },
  { name: 'Mashed Potatoes and Gravy', halfPan: '$45', fullPan: '$80' },
  { name: 'Potato Salad', halfPan: '$50', fullPan: '$90' },
  { name: 'Pasta Salad', halfPan: '$50', fullPan: '$90' },
  { name: 'Tossed Garden Salad', halfPan: '$40', fullPan: '$70' },
];

export const DESSERTS: MenuItemSingleTier[] = [
  { name: 'Traditional Spiral Pound Cake', price: '$45 whole' },
  { name: 'Lemon Spiral Pound Cake', price: '$50 whole' },
  { name: 'Peach Cobbler', price: '$50 half | $90 full' },
  { name: 'Apple Pie', price: '$30 whole' },
  { name: 'Sweet Potato Pie', price: '$30 whole' },
  { name: 'Banana Pudding', price: '$50 half | $90 full' },
  { name: 'Old School Butter Cookies', price: '$10 per dozen*' },
];

export const MEATS_SPECIAL_ORDERS: MenuItemSingleTier[] = [
  { name: 'Whole Oven Roasted Turkey', price: 'Starting at $100' },
  { name: 'Whole Fried Turkey', price: 'Starting at $125' },
  { name: 'Whole Baked Ham', price: 'Starting at $90' },
  { name: 'Other Meats and Custom Dishes', price: 'Quoted individually' },
];

export const ORDERING_POLICIES: OrderingPolicy[] = [
  {
    step: 1,
    title: 'Regular orders',
    description: "Please place orders at least 5 calendar days in advance. Orders requested with less than 5 days' notice are subject to availability.",
  },
  {
    step: 2,
    title: '50 or more servings',
    description: 'Place orders at least 7 calendar days in advance.',
  },
  {
    step: 3,
    title: '100 or more servings',
    description: 'Place orders at least 14 calendar days in advance.',
  },
  {
    step: 4,
    title: 'Rush requests',
    description: "Requests made with less than 72 hours' notice are subject to availability and a $25 rush fee. Acceptance is not guaranteed.",
  },
  {
    step: 5,
    title: 'Pickup',
    description: 'Complimentary.',
  },
  {
    step: 6,
    title: 'Delivery',
    description: '$15 within 10 miles. $25 for 11 to 20 miles. Delivery beyond 20 miles is quoted individually.',
  },
  {
    step: 7,
    title: 'Packaging',
    description: 'Individual meal packaging is available for an additional fee.',
  },
  {
    step: 8,
    title: 'Sales tax',
    description: 'Applicable sales tax will be added to all orders.',
  },
];

export const NOTICE_BOX_TEXT =
  'Half pans serve approximately 15 to 18 people. Serving amounts vary by item and portion size. Other meat selections are quoted based on the selection and current market cost.';

export const DISCLAIMER_NOTE =
  '*Limited-time introductory pricing applies to select half-pan items and Old School Butter Cookies. All prices are subject to change based on ingredient costs and market availability. Final pricing will be confirmed before an order is accepted.';
