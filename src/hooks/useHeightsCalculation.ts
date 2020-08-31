import { useLayoutEffect, useRef } from 'react';

export interface HeightsData {
  container: number;
  clones: number;
}

const getClonesHeight = (): number => {
  const clones: HTMLCollectionOf<Element> = window.document.getElementsByClassName(
    'clone'
  );
  let clonesHeight = 0;
  if (clones.length > 0) {
    //@ts-ignore
    for (const clone of clones) {
      clonesHeight += clone.offsetHeight;
    }
  }
  return clonesHeight;
};

export function useHeightsCalculation(
  targetFn: (heights: HeightsData) => void,
  targetElement: HTMLElement | null,
  wait?: number
): void {
  const throttleTimeoutRef: React.MutableRefObject<NodeJS.Timer | null> = useRef(
    null
  );

  useLayoutEffect(() => {
    const callback = (): void => {
      targetFn({
        container: targetElement
          ? targetElement.scrollHeight
          : window.document.body.scrollHeight,
        clones: getClonesHeight(),
      });
      if (wait) throttleTimeoutRef.current = null;
    };

    const handleResize = (): void => {
      if (wait) {
        if (throttleTimeoutRef.current === null) {
          throttleTimeoutRef.current = setTimeout(callback, wait);
        }
      } else callback();
    };
    window.addEventListener('resize', handleResize);
    callback();

    return () => window.removeEventListener('resize', handleResize);
  }, [targetElement, targetFn, wait]);
}
