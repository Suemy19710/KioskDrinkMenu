import NavHeader from '../components/NavHeader';

export default function CheckoutScreen({
  cart,
  orderType,
  onBack,
  onRemoveItem,
  onPlaceOrder,
}) {
  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="screen active" id="screen-checkout">
      <NavHeader
        title="Your Order"
        onBack={onBack}
        showCart={false}
      />

      <div className="checkout-body">
        <div className="cart-list">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <span>Your order is empty</span>
            </div>
          ) : (
            cart.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-item-emoji">{cartItem.item.emoji}</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">
                    {cartItem.qty > 1 ? `${cartItem.qty}× ` : ''}
                    {cartItem.item.name}
                  </div>
                  <div className="cart-item-opts">{cartItem.opts.join(' · ')}</div>
                </div>
                <div className="cart-item-price">£{cartItem.total.toFixed(2)}</div>
                <div className="cart-item-remove" onClick={() => onRemoveItem(cartItem.id)}>✕</div>
              </div>
            ))
          )}
        </div>

        <div className="checkout-panel">
          <div className="checkout-panel-label">Summary</div>

          <div className="order-type-tag">
            <span>{orderType === 'Dine In' ? '☕' : '🥤'}</span>
            <span>{orderType}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Service</span>
            <span>£0.00</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>

          <button
            className="place-order-btn"
            onClick={onPlaceOrder}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}