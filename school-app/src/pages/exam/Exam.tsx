import styles from "./exam.module.scss";
import Rt from "../../components/UI/tr/Rt";
import { useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MaterialCard from "../../components/UI/materialCard/MaterialCard";
export default function Exam() {
  const { rt } = useAppSelector((state) => state.rt);
  const { ce } = useAppSelector((state) => state.ce);
  const { specification } = useAppSelector((state) => state.specification);
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className={styles.exam}>
        <div className={styles.exam__container}>
          <h2 className={`{styles.section__title} _title`}>
            English <span className="_title-decor"> Exam</span> Prep{" "}
            <span className="_title-decor"> Zone</span>
          </h2>
          <h3 className="_subtitle">Rehearsal testing</h3>
          <div className={styles.test__row}>
            {rt.map((item) => {
              return <Rt key={item.id} {...item}></Rt>;
            })}
          </div>
          <div className={styles.test__item_video}>
            <iframe
              src="https://www.youtube.com/embed/mupEdl-qYlU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.exam__line}></div>
          <h3 className="_subtitle">Centralized examination</h3>
          <div className={styles.test__row}>
            {ce.map((item) => {
              return <Rt key={item.id} {...item}></Rt>;
            })}
          </div>
          <div className={styles.exam__line}></div>
          <h3 className="_subtitle">Specification</h3>
          <div className={styles.exam__specs}>
            <div>
              {specification.map((item) => {
                return <MaterialCard key={item.id} {...item}></MaterialCard>;
              })}
            </div>
            <div className={styles.spec__iframe}>
              <iframe
                src="https://wordwall.net/embed/4357276f0a0d463a8a4ffbd991291e4a?themeId=61&templateId=5&fontStackId=1"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
