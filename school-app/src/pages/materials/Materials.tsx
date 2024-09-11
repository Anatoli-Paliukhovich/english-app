import styles from "./materials.module.scss";
import { useAppSelector } from "../../hooks";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Materials() {
  const { materials } = useAppSelector((state) => state.materials);
  const pathname = useLocation();

  const handleDownload = (href: string, filename: string) => {
    const tempLink = document.createElement("a");
    tempLink.href = href;
    tempLink.setAttribute("download", filename);
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={styles.materials}>
        <div className={styles.materials__container}>
          <h2 className="_title">
            Insightful <span className="_title-decor">Resource</span> Collection
          </h2>
          <div className={styles.materials__row}>
            {materials.map((material) => {
              return (
                <div key={material.id} className={styles.materials__column}>
                  <div className={styles.materials__item}>
                    <button
                      onClick={() =>
                        handleDownload(material.href, material.title)
                      }
                      className={styles.materials__item_btn}
                    >
                      Download
                    </button>
                    <div className={styles.materials__item_image}>
                      <img
                        className={styles.materials__item_image_hover}
                        src={material.src}
                        alt={material.title}
                      />
                    </div>
                    <div className={styles.materials__item_body}>
                      <div className={styles.materials__item_subtitle}>
                        {material.title}
                      </div>
                      <div className={styles.materials__item_text}>
                        <p>{material.author1}</p>
                        <p>{material.author2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
