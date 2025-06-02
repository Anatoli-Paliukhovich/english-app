import styles from "./materials.module.scss";
import { useAppSelector } from "../../hooks";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MaterialCard from "../../components/UI/materialCard/MaterialCard";
export default function Materials() {
  const { materials } = useAppSelector((state) => state.materials);
  const pathname = useLocation();

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
            {materials.map((item) => {
              return <MaterialCard key={item.id} {...item}></MaterialCard>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
