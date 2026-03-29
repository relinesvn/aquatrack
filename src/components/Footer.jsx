import { useState, useEffect } from 'react';

function Footer() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup — зупиняємо інтервал при розмонтуванні
    return () => clearInterval(interval);
  }, []); // порожній масив — запускається лише раз

  const formatted = time.toLocaleTimeString('uk-UA', {
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateFormatted = time.toLocaleDateString('uk-UA', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  });

  return (
    <footer className="footer">
      <span>© 2026 AquaTrack. Всі права захищені.</span>
      <div className="footer__clock">
        <span className="footer__date">{dateFormatted}</span>
        <span className="footer__time">🕐 {formatted}</span>
      </div>
    </footer>
  );
}

export default Footer;