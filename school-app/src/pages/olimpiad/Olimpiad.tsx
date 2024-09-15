import styles from "./olimpiad.module.scss";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { useLocation } from "react-router-dom";
import MaterialCard from "../../components/UI/materialCard/MaterialCard";
export default function Olimpiad() {
  const { olympiads } = useAppSelector((state) => state.olympiads);
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={styles.materials}>
      <div className={styles.materials__container}>
        <h2 className="_title">
          English
          <span className="_title-decor"> Olympiad</span>
          <span className="_title-decor"> Challenges</span>: Test your
          <span className="_title-decor"> language</span> skills with a variety
          of challenging
          <span className="_title-decor"> tasks and exercises.</span>
        </h2>
        <div className={styles.materials__row}>
          {olympiads.map((item) => {
            return <MaterialCard key={item.id} material={item}></MaterialCard>;
          })}
        </div>
      </div>
    </div>
  );
}
