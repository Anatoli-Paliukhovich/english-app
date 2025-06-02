import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { useRef, useEffect, useState } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Offset {
  top: number;
  left: number;
}

export const useAnimation = (animationStart: number = 4) => {
  const animItemRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const [animationDone, setAnimationDone] = useState<boolean>(false);
  useEffect(() => {
    const animItem = animItemRef.current;

    if (!animItem) return;

    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = getOffset(animItem).top;

    const handleScroll = () => {
      let animItemPoint = window.innerHeight - animItemHeight / animationStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint =
          window.innerHeight - window.innerHeight / animationStart;
      }

      if (
        window.scrollX > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        setActive(true);
        setAnimationDone(true);
      } else {
        if (!animationDone) {
          setActive(false);
        }
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStart, animationDone]);

  function getOffset(el: HTMLElement): Offset {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
  }

  return [animItemRef, active] as const;
};

export const useRepeatAnimation = (animationStart: number = 4) => {
  const animItemRepeatRef = useRef<HTMLDivElement>(null);
  const [activeRepeat, setActiveRepeat] = useState<boolean>(false);
  useEffect(() => {
    const animItem = animItemRepeatRef.current;

    if (!animItem) return;

    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = getOffset(animItem).top;

    const handleScroll = () => {
      let animItemPoint = window.innerHeight - animItemHeight / animationStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint =
          window.innerHeight - window.innerHeight / animationStart;
      }

      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        setActiveRepeat(true);
      } else {
        setActiveRepeat(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStart]);

  function getOffset(el: HTMLElement): Offset {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
  }

  return [animItemRepeatRef, activeRepeat] as const;
};
