import styles from "./accordion.module.scss";
import AccordionItem from "./AccordionItem";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setChosen } from "../../../features/accordion/accordionSlice";
import { useRef } from "react";
import Search from "../search/Search";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Accordion() {
  const { data, isChosen } = useAppSelector((state) => state.accordion);
  const { searchQuery, value } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredData = data.filter((rule) => {
    return rule.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleToggle = (index: string): void => {
    dispatch(setChosen(index));
  };
  useEffect(() => {
    dispatch(setChosen(""));
  }, [location.pathname]);
  useEffect(() => {
    inputRef.current?.focus();
  }, [value, searchQuery]);
  return (
    <>
      <div className={styles.accordion__body}>
        <Search ref={inputRef}></Search>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => {
            return (
              <AccordionItem
                onToggle={() => handleToggle(index.toString())}
                key={item.id}
                active={isChosen === index.toString()}
                {...item}
              ></AccordionItem>
            );
          })
        ) : (
          <h4 className="no_found">Oops, nothing was found :(</h4>
        )}
      </div>
    </>
  );
}
