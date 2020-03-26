export interface Coordinates {
  x: number;
  y: number;
}

export function getScrollPosition(
  targetElement: HTMLElement | null
): Coordinates {
  if (!targetElement) return { x: 0, y: 0 };

  return {
    x: targetElement.scrollLeft,
    y: targetElement.scrollTop - targetElement.clientTop,
  };
}
