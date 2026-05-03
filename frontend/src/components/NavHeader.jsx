export default function NavHeader({ title, onBack, cartCount, onCartClick, showCart = true }) {
  return (
    <div className="nav-header">
      <div className="nav-back" onClick={onBack}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="nav-title">{title}</div>

      {showCart && (
        <div className="nav-cart-btn" onClick={onCartClick}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2H3.5L5.5 10H12L14 4H4.5" stroke="#1a1200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="7" cy="13" r="1" fill="#1a1200" />
            <circle cx="11" cy="13" r="1" fill="#1a1200" />
          </svg>
          <div className="cart-badge">{cartCount}</div>
        </div>
      )}
    </div>
  );
}