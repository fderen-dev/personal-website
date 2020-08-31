import React, { useState } from 'react';
import Gear from '../../components/Gear';

import { useScrollDetection, ScrollData } from '../../hooks/useScrollDetection';

const Gears: React.FunctionComponent = () => {
  const [scrollData, setScrollData] = useState<ScrollData>({ isScrolling: false, scrollDirection: 'down' });
  useScrollDetection(setScrollData, 50);

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
  </>
);
}

export default Gears;
