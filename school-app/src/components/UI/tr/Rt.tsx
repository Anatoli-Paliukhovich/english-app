import styles from "./rt.module.scss";
import type { RT } from "../../../features/rt/rtSlice";
export default function Rt({ id, title, variant, href }: RT) {
  const handleDownload = (href: string, filename: string) => {
    const tempLink = document.createElement("a");
    tempLink.href = href;
    tempLink.setAttribute("download", filename);
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };
  return (
    <>
      <a target="_blank" href={href} className={styles.test__column}>
        <div className={styles.test__item}>
          <h4 className={styles.test__item_title}>
            {variant.slice(-2)} {title}
          </h4>
          <div className={styles.test__item_bottom}>
            <div className={styles.test__item_variant}>{variant}</div>
            <div
              onClick={(event) => {
                event.preventDefault();
                handleDownload(href, title);
              }}
              className={styles.test__item_download}
            >
              download
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
