import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import Counter from '../Counter';

import './SkillBar.scss';

interface SkillBarProps {
  children?: ReactNode;
  name: string;
  value: number;
  visible: boolean;
}

const SkillBar: FunctionComponent<SkillBarProps> = props => {
  const { children, name, value, visible } = props;
  return (
    <div className="skill-bar">
      <div className="logo">{children ? children : { name }}</div>
      <div className={classNames('bar', { visible })}>
        <div style={{ width: `${value}%` }} />
      </div>
      <div className="value">
        <Counter targetValue={value} start={visible} timeMs={2500} />%
      </div>
    </div>
  );
};

export default SkillBar;
