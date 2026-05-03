export const MENU = [
  { id: 1, name: 'Flat White', emoji: '☕', cat: 'Coffee', price: 3.50, desc: 'Velvety micro-foam espresso with silky steamed milk.', hasMilk: true, hasTemp: true, hasStrength: true },
  { id: 2, name: 'Cappuccino', emoji: '☕', cat: 'Coffee', price: 3.80, desc: 'Bold espresso topped with thick creamy foam.', hasMilk: true, hasTemp: true, hasStrength: true },
  { id: 3, name: 'Latte', emoji: '🍵', cat: 'Coffee', price: 4.00, desc: 'Rich espresso with velvety steamed milk.', hasMilk: true, hasTemp: true, hasStrength: true },
  { id: 4, name: 'Americano', emoji: '☕', cat: 'Coffee', price: 3.20, desc: 'Espresso shots diluted with hot water.', hasMilk: false, hasTemp: true, hasStrength: true },
  { id: 5, name: 'Espresso', emoji: '☕', cat: 'Coffee', price: 2.80, desc: 'A concentrated single shot of pure espresso.', hasMilk: false, hasTemp: false, hasStrength: true },
  { id: 6, name: 'Mocha', emoji: '🍫', cat: 'Coffee', price: 4.50, desc: 'Espresso with chocolate sauce and steamed milk.', hasMilk: true, hasTemp: true, hasStrength: false },
  { id: 7, name: 'Cold Brew', emoji: '🧊', cat: 'Coffee', price: 4.20, desc: 'Slow-steeped 12-hour cold brew coffee.', hasMilk: false, hasTemp: false, hasStrength: false },
  { id: 8, name: 'Matcha Latte', emoji: '🍵', cat: 'Tea', price: 4.20, desc: 'Premium ceremonial grade matcha with steamed milk.', hasMilk: true, hasTemp: true, hasStrength: false },
  { id: 9, name: 'Chai Latte', emoji: '🍵', cat: 'Tea', price: 3.90, desc: 'Spiced masala chai blend with warm steamed milk.', hasMilk: true, hasTemp: true, hasStrength: false },
  { id: 10, name: 'Earl Grey', emoji: '🫖', cat: 'Tea', price: 3.00, desc: 'Classic bergamot-infused black tea.', hasMilk: true, hasTemp: false, hasStrength: false },
  { id: 11, name: 'Mango Smoothie', emoji: '🥭', cat: 'Smoothies', price: 5.50, desc: 'Blended fresh mango, banana and orange juice.', hasMilk: false, hasTemp: false, hasStrength: false },
  { id: 12, name: 'Berry Blast', emoji: '🫐', cat: 'Smoothies', price: 5.80, desc: 'Mixed berries, yogurt and honey blended together.', hasMilk: false, hasTemp: false, hasStrength: false },
  { id: 13, name: 'Green Boost', emoji: '🥦', cat: 'Smoothies', price: 5.50, desc: 'Spinach, kale, apple, ginger and lime.', hasMilk: false, hasTemp: false, hasStrength: false },
  { id: 14, name: 'Lemonade', emoji: '🍋', cat: 'Cold', price: 3.50, desc: 'Freshly squeezed lemons with sparkling water.', hasMilk: false, hasTemp: false, hasStrength: false },
  { id: 15, name: 'Iced Tea', emoji: '🧊', cat: 'Cold', price: 3.20, desc: 'House brewed black tea served over ice.', hasMilk: false, hasTemp: false, hasStrength: false },
  { id: 16, name: 'Fruit Punch', emoji: '🍹', cat: 'Cold', price: 3.80, desc: 'Mixed tropical fruit juices over crushed ice.', hasMilk: false, hasTemp: false, hasStrength: false },
];

export const CATEGORIES = ['All', ...new Set(MENU.map(item => item.cat))];