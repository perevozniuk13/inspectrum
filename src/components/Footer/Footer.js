import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer__author-container">
          <h3 className="footer__logo">Inspectrum</h3>
          <p className="footer__author">By Oleksandra Perevozniuk</p>
        </section>

        <section className="footer__contact-info">
          <h3 className="footer__contact-title">Contact us</h3>
          <ul className="footer__contact-info-list">
            {/* <li className="footer__contact-info-item">+1-111-1232-123</li> */}
            <li className="footer__contact-info-item">
              sashaperevozniuk01@gmail.com
            </li>
            <li className="footer__contact-info-item">London, UK</li>
          </ul>
        </section>
      </footer>
    </>
  );
}
