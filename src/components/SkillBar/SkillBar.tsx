import React from 'react';

import Counter from '../Counter';

import './SkillBar.scss';

interface SkillBarProps {
  name: string;
  value: number;
  visible: boolean;
}

const timeMS = 2000;

const SkillBar: React.FunctionComponent<SkillBarProps> = props => {
  const { children, name, value, visible } = props;

  return (
    <div className="skill-bar">
      <div className="logo">{children ? children : { name }}</div>
      <div className="bar">
        <div className="progress" style={{ width: visible ? `${value}%` : 0, transitionDuration: `${(timeMS * (value / 100))/1000}s`}} />
      </div>
      <div className="value">
        <Counter targetValue={value} start={visible} timeMs={timeMS} />%
      </div>
    </div>
  );
};

export default SkillBar;
