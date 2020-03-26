import { useRef, MutableRefObject, useLayoutEffect } from 'react';
import { getScrollPosition, Coordinates } from '../utils/utils';

export function useScrollPosition(
  targetFn: (scollValue: number) => void,
  targetElement: HTMLElement | null,
  wait?: number,
  deps?: Array<any>
): void {
  const prevCordsRef: MutableRefObject<Coordinates> = useRef(
    getScrollPosition(targetElement)
  );
  const throttleTimeoutRef: MutableRefObject<NodeJS.Timer | null> = useRef(
    null
  );

  useLayoutEffect(() => {
    const callback = (): void => {
      const currCords = getScrollPosition(targetElement);
      targetFn(currCords.y);
      prevCordsRef.current = currCords;
      if (wait) throttleTimeoutRef.current = null;
    };

    const handleScroll = (): void => {
      if (wait) {
        if (throttleTimeoutRef.current === null) {
          throttleTimeoutRef.current = setTimeout(() => {
            callback();
          }, 0);
        }
      } else callback();
    };

    if (targetElement !== null)
      targetElement.addEventListener('scroll', handleScroll);

    return () => {
      if (targetElement !== null)
        targetElement.removeEventListener('scroll', handleScroll);
    };
  }, deps);
}
