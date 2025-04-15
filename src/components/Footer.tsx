import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="info-links">
          <a href="https://it.wikipedia.org/wiki/Cookie" target="_blank" rel="noopener noreferrer">
            Cookie
          </a>
          <a href="https://ec.europa.eu/investeuportal/desktop/it/Privacy_Statement.html#:~:text=L'informativa%20sulla%20privacy%20illustra,%2C%20blocco%2C%20ecc.)." target="_blank" rel="noopener noreferrer">
            Informativa sulla privacy
          </a>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/lizard.kicks/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
