export default function WelcomeScreen({ onStart }) {
  return (
    <div className="screen active" id="screen-welcome">
      <div className="welcome-bg"></div>
      <div className="welcome-ring"></div>
      <div className="welcome-ring"></div>

      <div className="welcome-content">
        <div className="logo-mark">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M8 8 C8 8 10 6 16 6 C22 6 24 8 24 8 L22 22 C22 24 20 26 16 26 C12 26 10 24 10 22 Z" stroke="#1a1200" strokeWidth="1.5" fill="none" />
            <path d="M22 12 C24 11 27 12 27 15 C27 18 24 19 22 18" stroke="#1a1200" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M12 10 Q16 14 20 10" stroke="#1a1200" strokeWidth="1" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="brand-name">Brew &amp; Co</div>
        <div className="brand-tagline">Artisan Coffee &amp; Drinks</div>
        <div className="tap-prompt">Tap anywhere to begin</div>
      </div>

      <div className="welcome-tap-zone" onClick={onStart}></div>
    </div>
  );
}