export default function OrderTypeScreen({ onSelectOrderType }) {
  return (
    <div className="screen active" id="screen-order-type">
      <div className="order-header">
        <h2>How are you ordering?</h2>
        <p>Select your preference to get started</p>
      </div>

      <div className="order-type-grid">
        <div className="order-type-card" onClick={() => onSelectOrderType('Dine In')}>
          <div className="order-type-badge">Popular</div>
          <div className="order-type-icon">☕</div>
          <div className="order-type-label">Dine In</div>
          <div className="order-type-desc">Enjoy your drinks<br />in our cosy space</div>
        </div>

        <div className="order-type-card" onClick={() => onSelectOrderType('Takeaway')}>
          <div className="order-type-icon">🥤</div>
          <div className="order-type-label">Takeaway</div>
          <div className="order-type-desc">Order to go in<br />our eco cups</div>
        </div>
      </div>
    </div>
  );
}