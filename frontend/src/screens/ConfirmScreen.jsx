export default function ConfirmScreen({ orderNumber, orderType, onNewOrder }) {
  return (
    <div className="screen active" id="screen-confirm">
      <div className="confirm-glow"></div>
      <div className="confirm-icon">✓</div>
      <div className="confirm-number">Your order number</div>
      <div className="confirm-order-id">#{orderNumber}</div>
      <div className="confirm-msg">
        {orderType === 'Dine In' ? (
          <>Your drinks are being prepared.<br />We'll call your number when ready!</>
        ) : (
          <>Your takeaway is being prepared.<br />Please wait at the counter.</>
        )}
      </div>
      <div className="confirm-new-btn" onClick={onNewOrder}>Start New Order</div>
    </div>
  );
}