import { useMemo, useState } from 'react';
import { MENU, CATEGORIES } from './data/menuData';
import WelcomeScreen from './screens/WelcomeScreen';
import OrderTypeScreen from './screens/OrderTypeScreen';
import MenuScreen from './screens/MenuScreen';
import ItemScreen from './screens/ItemScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import Toast from './components/Toast';
import './styles/kiosk.css';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [orderType, setOrderType] = useState('Dine In');
  const [cart, setCart] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [itemQty, setItemQty] = useState(1);
  const [itemOptions, setItemOptions] = useState({
    size: 'Regular',
    milk: 'Full Fat',
    temp: 'Hot',
    strength: 'Double',
  });
  const [toast, setToast] = useState({ show: false, message: '' });
  const [orderNumber, setOrderNumber] = useState(42);

  const filteredItems = useMemo(() => {
    if (currentCategory === 'All') return MENU;
    return MENU.filter((item) => item.cat === currentCategory);
  }, [currentCategory]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  function showToast(message) {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2200);
  }

  function openItem(item) {
    setCurrentItem(item);
    setItemQty(1);
    setItemOptions({
      size: 'Regular',
      milk: 'Full Fat',
      temp: 'Hot',
      strength: 'Double',
    });
    setScreen('item');
  }

  function changeOption(key, value) {
    setItemOptions((prev) => ({ ...prev, [key]: value }));
  }

  function changeQty(delta) {
    setItemQty((prev) => Math.max(1, Math.min(10, prev + delta)));
  }

  function addToCart() {
    if (!currentItem) return;

    const opts = [];
    if (itemOptions.size) opts.push(itemOptions.size);
    if (currentItem.hasMilk && itemOptions.milk) opts.push(itemOptions.milk);
    if (currentItem.hasTemp && itemOptions.temp) opts.push(itemOptions.temp);
    if (currentItem.hasStrength && itemOptions.strength) opts.push(`${itemOptions.strength} shot`);

    const cartItem = {
      id: Date.now(),
      item: currentItem,
      qty: itemQty,
      opts,
      total: currentItem.price * itemQty,
    };

    setCart((prev) => [...prev, cartItem]);
    showToast(`${currentItem.name} added to order`);
    setScreen('menu');
  }

  function removeCartItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function placeOrder() {
    if (cart.length === 0) return;
    const number = Math.floor(Math.random() * 89) + 10;
    setOrderNumber(number);
    setCart([]);
    setScreen('confirm');
  }

  function startNewOrder() {
    setCurrentCategory('All');
    setOrderType('Dine In');
    setCurrentItem(null);
    setItemQty(1);
    setCart([]);
    setScreen('welcome');
  }

  return (
    <>
      {screen === 'welcome' && (
        <WelcomeScreen onStart={() => setScreen('orderType')} />
      )}

      {screen === 'orderType' && (
        <OrderTypeScreen
          onSelectOrderType={(type) => {
            setOrderType(type);
            setScreen('menu');
          }}
        />
      )}

      {screen === 'menu' && (
        <MenuScreen
          categories={CATEGORIES}
          currentCategory={currentCategory}
          onSelectCategory={setCurrentCategory}
          items={filteredItems}
          onBack={() => setScreen('orderType')}
          cartCount={cartCount}
          onCartClick={() => setScreen('checkout')}
          onOpenItem={openItem}
        />
      )}

      {screen === 'item' && (
        <ItemScreen
          item={currentItem}
          options={itemOptions}
          quantity={itemQty}
          onBack={() => setScreen('menu')}
          cartCount={cartCount}
          onCartClick={() => setScreen('checkout')}
          onChangeOption={changeOption}
          onChangeQty={changeQty}
          onAddToCart={addToCart}
        />
      )}

      {screen === 'checkout' && (
        <CheckoutScreen
          cart={cart}
          orderType={orderType}
          onBack={() => setScreen('menu')}
          onRemoveItem={removeCartItem}
          onPlaceOrder={placeOrder}
        />
      )}

      {screen === 'confirm' && (
        <ConfirmScreen
          orderNumber={orderNumber}
          orderType={orderType}
          onNewOrder={startNewOrder}
        />
      )}

      <Toast show={toast.show} message={toast.message} />
    </>
  );
}