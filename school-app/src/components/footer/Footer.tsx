import "./footer.scss";
import Svg1 from "../../assets/footer/f1.svg";
import Svg2 from "../../assets/footer/f2.svg";
import Svg3 from "../../assets/footer/f3.svg";
import Logo from "../../assets/rlogo/logo.png";
import Svg4 from "../../assets/footer/f4.svg";
import Svg5 from "../../assets/footer/f5.svg";
import Svg6 from "../../assets/footer/f6.svg";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <section className="footer__content">
          <div className="footer__container">
            <div className="footer__body">
              <div className="footer__sip">
                <h2 className="_title _left">
                  Strengthen Your
                  <span className="_title-decor"> English Proficiency</span>
                </h2>
                {/* <ul className="footer__icons-list">
                  <li className="footer__icons-item">
                    <a
                      target="_blank"
                      href="https://sch26.brestgoo.gov.by/"
                      className="footer__icons-link"
                    >
                      <img
                        className="logo__img"
                        width="55"
                        height="60"
                        src={Logo}
                        alt="logo"
                      />
                    </a>
                  </li>
                  <li className="footer__icons-item">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="footer__icons-link"
                    >
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="59"
                          height="59"
                          rx="29.5"
                          stroke="#C1B6AD"
                        />
                        <path
                          d="M30 34C32.2091 34 34 32.2091 34 30C34 27.7909 32.2091 26 30 26C27.7909 26 26 27.7909 26 30C26 32.2091 27.7909 34 30 34Z"
                          stroke="#E1D4C9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 34V26C21 23.2386 23.2386 21 26 21H34C36.7614 21 39 23.2386 39 26V34C39 36.7614 36.7614 39 34 39H26C23.2386 39 21 36.7614 21 34Z"
                          stroke="#E1D4C9"
                        />
                        <path
                          d="M35.5 24.51L35.51 24.4989"
                          stroke="#E1D4C9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="footer__icons-item">
                    <a
                      target="_blank"
                      href="https://ru-ru.facebook.com/"
                      className="footer__icons-link"
                    >
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="59"
                          height="59"
                          rx="29.5"
                          stroke="#C1B6AD"
                        />
                        <path
                          d="M35 20H32C30.6739 20 29.4021 20.5268 28.4645 21.4645C27.5268 22.4021 27 23.6739 27 25V28H24V32H27V40H31V32H34L35 28H31V25C31 24.7348 31.1054 24.4804 31.2929 24.2929C31.4804 24.1054 31.7348 24 32 24H35V20Z"
                          stroke="#E1D4C9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="footer__contacts">
                <h4 className="footer__contacts-title">Contact us</h4>
                <div className="footer__contacts-body">
                  <div className="contacts-body-row">
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/KiVhfYG16u1aktPn9"
                      className="stretch"
                    >
                      <div className="contacts-body-icon">
                        <img src={Svg4} alt="location" />
                      </div>
                      <div className="contacts-body-text">
                        41 Lenigradskaya str., &nbsp;Brest
                      </div>
                    </a>
                  </div>
                  <div className="contacts-body-row">
                    <a href="tel:80162251380" className="stretch">
                      <div className="contacts-body-icon">
                        <img src={Svg5} alt="phone" />
                      </div>
                      <div className="contacts-body-text">
                        8 (0162) 25-13-80
                      </div>
                    </a>
                  </div>
                  <div className="contacts-body-row">
                    <div className="contacts-body-icon">
                      <img src={Svg6} alt="clock" />
                    </div>
                    <div className="contacts-body-text">
                      Mon-Sat: 8:00 AM – 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
