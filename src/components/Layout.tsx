import React, { FunctionComponent, ReactNode, useState } from 'react';

import { ScrollData, useScrollDetection } from '../hooks/useScrollDetection';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

import Gear from './Gear';

import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = props => {
  const { children } = props;
  const [scrollData, setScrollData] = useState<ScrollData>({
    isScrolling: false,
    scrollDirection: 'down',
  });
  useScrollDetection(setScrollData, 100);
  useInfiniteScroll();

  return (
    <>
      <Gear
        move={scrollData.isScrolling}
        moveDir={scrollData.scrollDirection}
        top="5vh"
        left="0vw"
        className="big-gear"
      />
      <Gear
        move={scrollData.isScrolling}
        moveDir={scrollData.scrollDirection}
        top="70vh"
        left="80vw"
        className="small-gear"
      />
      <main id="main">{children}</main>
    </>
  );
};
export default Layout;
