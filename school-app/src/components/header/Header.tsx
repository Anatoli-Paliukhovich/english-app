import styles from "./header.module.scss";
import Logo from "../../assets/logo.png";
import { menuLinks } from "../../data";
import GrammarTest from "./GrammarTest";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setBurger } from "../../features/header/headerSlice";
export default function Header() {
  const { isBurger } = useAppSelector((state) => state.header);
  const dispatch = useAppDispatch();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__body}>
            <a href="#" className={styles.header__logo}>
              <img src={Logo} alt="logo" />
            </a>
            <nav
              className={
                isBurger
                  ? `${styles.header__menu} ${styles._active}`
                  : `${styles.header__menu}`
              }
            >
              <ul className={styles.header__list}>
                {menuLinks.length > 0 &&
                  menuLinks.map((link) => {
                    return (
                      <li key={link.id} className={styles.header__item}>
                        <a
                          href={link.href}
                          className={`${styles.header__link} ${styles.stretch_line}`}
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
                <GrammarTest></GrammarTest>
              </ul>
            </nav>
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
