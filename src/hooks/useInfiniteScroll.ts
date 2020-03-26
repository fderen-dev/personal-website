import { useRef, MutableRefObject } from 'react';
import { useHeightsCalculation, HeightsData } from './useHeightsCalculation';
import { useScrollPosition } from './useScrollPosition';

export function useInfiniteScroll(): void {
  const heightsRef: MutableRefObject<HeightsData> = useRef({
    container: 0,
    clones: 0,
  });
  let targetElement: HTMLElement | null = null;
  if (typeof window !== 'undefined')
    targetElement = window.document.getElementById('___gatsby');

  const disableScroll: MutableRefObject<boolean> = useRef(false);
  const timerRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  const handleHeightsChange = (heightsData: HeightsData): void => {
    heightsRef.current = heightsData;
  };
  const handleScrollPositionChange = (scrollPosition: number): void => {
    if (targetElement !== null) {
      if (disableScroll.current === false) {
        if (
          heightsRef.current.clones + scrollPosition >=
          heightsRef.current.container
        ) {
          targetElement.scrollTo(0, 1);
          disableScroll.current = true;
        } else if (scrollPosition <= 0) {
          targetElement.scrollTo(
            0,
            heightsRef.current.container - heightsRef.current.clones
          );
          disableScroll.current = true;
        }
      } else if (disableScroll.current === true && timerRef.current === null) {
        timerRef.current = setTimeout(() => {
          disableScroll.current = false;
          timerRef.current = null;
        }, 5);
      }
    }
  };
  useHeightsCalculation(handleHeightsChange, targetElement);
  useScrollPosition(handleScrollPositionChange, targetElement);
}
