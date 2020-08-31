import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
// @ts-ignore

import GearIcon from '../../static/gear.svg';

import './Gear.scss';

export interface GearProps {
  moveDir: string;
  move: boolean;
  top?: string;
  left?: string;
  className?: string;
}

const Gear: FunctionComponent<GearProps> = props => {
  const { moveDir, move, top, left, className } = props;
  return (
    <div
      className={classNames('gear', className)}
      style={{ top: top, left: left }}
    >
      <GearIcon className={classNames({ paused: !move }, moveDir)} />
    </div>
  );
};

export default Gear;
