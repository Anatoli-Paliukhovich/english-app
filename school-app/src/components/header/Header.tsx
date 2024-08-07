import styles from "./header.module.scss";

export default function Header() {
  const menuLinks = [
    {
      id: 1,
      title: "Grammar rules",
      href: "",
    },
    {
      id: 2,
      title: "Olympiads",
      href: "",
    },
    {
      id: 3,
      title: "Centralized examination",
      href: "",
    },
    {
      id: 4,
      title: "Contact us",
      href: "",
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__body}>
            <a href="#" className={styles.header__logo}>
              <img src="/src/assets/logo.png" alt="logo" />
            </a>
            <nav className={styles.header__menu}>
              <ul className={styles.menu__list}>
                {menuLinks.length > 0 &&
                  menuLinks.map((link) => {
                    return (
                      <li key={link.id} className={styles.menu__item}>
                        <a
                          href={link.href}
                          className={`${styles.menu__link} ${styles.stretch_line}`}
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </nav>
            <a
              href="./menu_page/second_page.html"
              className={`${styles.icon} ${styles.stretch_line}`}
            >
              <div className={styles.icon__text}>
                Grammar <br /> tests
              </div>
              <div className={styles.icon__img}>
                <img src="/src/assets/test.png" alt="cup" />
              </div>
            </a>
            <div className={styles.burger__menu}></div>
          </div>
        </div>
      </header>
    </>
  );
}
