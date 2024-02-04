import React from "react";
import logo from '../../assets/img/logo.png'
import './footer.sass';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__group">
            <img src={logo} alt="logo" />
            <p className="footer__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ipsum a consequatur nemo fugiat! Numquam quas iste vero ipsam
              velit facere doloribus totam quos neque magnam, eos aliquid quia
              sunt.
            </p>
          </div>
          <ul className="footer__pages">
            <div className="footer__title">Pages</div>
            <li>The most watched movies</li>
            <li>Top Rated Movies</li>
            <li>Movies</li>
            <li>Serials</li>
          </ul>
          <ul className="footer__network">
            <div className="footer__title">Our social networks</div>
            <li>Telegram</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </ul>
          <ul className="footer__links">
            <div className="footer__title">For references</div>
            <li>Instagram</li>
            <li>Whatsapp</li>
            <li>Skype</li>
            <li>Telegram</li>
          </ul>
        </div>
        <div className="footer__endblock">© Filmberry.com - 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
