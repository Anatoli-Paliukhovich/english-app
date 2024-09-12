import styles from "./materialCard.module.scss";
import type { Material } from "../../../features/material/materialSlice";
export default function MaterialCard({ material }: { material: Material }) {
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
      <div key={material.id} className={styles.materials__column}>
        <div className={styles.materials__item}>
          <button
            onClick={() => handleDownload(material.href, material.title)}
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
    </>
  );
}
