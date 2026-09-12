import { useState, useEffect } from 'react'

function MLHBanner({ trigger, imgSrc, imgAlt, href }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setTimeout(() => setShow(true), 100);
    }
  }, [trigger]);

  return (
    <a
      id="mlh-trust-badge"
      className={show ? 'mlh-banner-slide' : 'mlh-banner-initial'}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        maxWidth: '100px',
        minWidth: '60px',
        position: 'fixed',
        right: '50px',
        top: 0,
        width: '10%',
        zIndex: 10000,
      }}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{ width: '100%' }}
      />
    </a>
  );
}

export default MLHBanner;