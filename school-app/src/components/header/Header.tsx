import styles from "./header.module.scss";
import { useEffect } from "react";
import { GrammarTest } from "./GrammarTest";
import { BackToHome } from "./BackToHome";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setBurger, setScrolled } from "../../features/header/headerSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { isBurger, isScrolled, links } = useAppSelector(
    (state) => state.header
  );
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        dispatch(setScrolled(true));
      } else {
        dispatch(setScrolled(false));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          location.pathname !== "/" ? styles.path : ""
        }`}
      >
        <div className={styles.header__container}>
          <div className={styles.header__body}>
            <Link
              to="/"
              className={styles.header__logo}
              onClick={() => dispatch(setBurger(false))}
            >
              <div>EnglishEase</div>
            </Link>
            <nav
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={
                isBurger
                  ? `${styles.header__menu} ${styles._active}`
                  : `${styles.header__menu}`
              }
            >
              <ul className={styles.header__list}>
                {links.length > 0 &&
                  links.map((link) => {
                    return (
                      <li key={link.title} className={styles.header__item}>
                        <a
                          onClick={() => {
                            navigate("/", { replace: true });
                            dispatch(setBurger(false));
                          }}
                          href={link.href.toLowerCase()}
                          className={`${styles.header__link} ${styles.stretch_line}`}
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                {location.pathname !== "/test" && isBurger ? (
                  <GrammarTest
                    onClick={() => dispatch(setBurger(false))}
                  ></GrammarTest>
                ) : (
                  ""
                )}
                {location.pathname !== "/" && isBurger ? (
                  <BackToHome
                    onClick={() => dispatch(setBurger(false))}
                  ></BackToHome>
                ) : (
                  ""
                )}
              </ul>
            </nav>
            {location.pathname !== "/test" ? (
              <GrammarTest
                onClick={() => dispatch(setBurger(false))}
              ></GrammarTest>
            ) : (
              <BackToHome
                onClick={() => dispatch(setBurger(false))}
              ></BackToHome>
            )}
            <div
              onClick={() => dispatch(setBurger(!isBurger))}
              className={
                isBurger
                  ? `${styles.burger__menu} ${styles._active}`
                  : `${styles.burger__menu}`
              }
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
