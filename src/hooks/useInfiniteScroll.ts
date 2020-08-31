import { useLayoutEffect, useRef } from 'react';
import { useHeightsCalculation, HeightsData } from './useHeightsCalculation';
import { useScrollPosition } from './useScrollPosition';

export function useInfiniteScroll(): void {
  const heightsRef: React.MutableRefObject<HeightsData> = useRef({
    container: 0,
    clones: 0,
  });
  let targetElement: HTMLElement | null = null;
  if (typeof window !== 'undefined')
    targetElement = window.document.getElementById('___gatsby');

  const disableScroll: React.MutableRefObject<boolean> = useRef(false);

  const handleHeightsChange = (heightsData: HeightsData): void => {
    heightsRef.current = heightsData;
  };

  const handleScrollPositionChange = (scrollPosition: number): void => {
    if (targetElement !== null) {
      if (disableScroll.current === false) {
        if (
          scrollPosition >=
          heightsRef.current.container - heightsRef.current.clones
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
      } else {
        setTimeout(() => {
          disableScroll.current = false;
        }, 40);
      }
    }
  };
  useLayoutEffect(() => {
    if (targetElement !== null) targetElement.scrollTo(0, 1);
  }, [targetElement]);

  useHeightsCalculation(handleHeightsChange, targetElement);
  useScrollPosition(handleScrollPositionChange, targetElement);
}
