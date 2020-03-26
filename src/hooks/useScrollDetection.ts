import { useRef, MutableRefObject, useLayoutEffect } from 'react';
import { getScrollPosition, Coordinates } from '../utils/utils';

export type ScrollDirection = 'up' | 'down';
export interface ScrollData {
  isScrolling: boolean;
  scrollDirection: ScrollDirection;
}

export function useScrollDetection(
  targetFn: (scrollData: ScrollData) => void,
  timeout: number
) {
  const prevCordsRef: MutableRefObject<Coordinates> = useRef({ x: 0, y: 0 });
  const isScrollingRef: MutableRefObject<boolean> = useRef(false);
  const timeoutRef: MutableRefObject<NodeJS.Timer | null> = useRef(null);

  useLayoutEffect(() => {
    const targetElement: HTMLElement | null = window
      ? window.document.getElementById('___gatsby')
      : null;
    const callback = (isScrolling: boolean): void => {
      const currCords = getScrollPosition(targetElement);
      targetFn({
        isScrolling: isScrolling,
        scrollDirection: prevCordsRef.current.y > currCords.y ? 'down' : 'up',
      });
      prevCordsRef.current = currCords;
    };

    const handleScroll = (): void => {
      if (isScrollingRef.current === false) {
        callback(true);
        isScrollingRef.current = true;
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(false);
        timeoutRef.current = null;
        isScrollingRef.current = false;
      }, timeout);
    };

    if (targetElement !== null)
      targetElement.addEventListener('scroll', handleScroll);

    return () => {
      if (targetElement !== null)
        targetElement.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
