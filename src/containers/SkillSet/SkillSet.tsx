import React, { FunctionComponent, useState } from 'react';
import VisiblitySensor from 'react-visibility-sensor';

import SkillBar from '../../components/SkillBar';

//@ts-ignore
import HtmlIcon from '../../static/html5.svg';
//@ts-ignore
import CssIcon from '../../static/css.svg';
//@ts-ignore
import JsIcon from '../../static/js.svg';
//@ts-ignore
import AndroidIcon from '../../static/android.svg';
//@ts-ignore
import PythonIcon from '../../static/python.svg';

import './SkillSet.scss';

const SkillSet: FunctionComponent = () => {
  const [isVisible, setVisiblity] = useState<boolean>(false);
  return (
    <VisiblitySensor onChange={setVisiblity}>
      <div className="skill-set">
        <SkillBar name="HTML5" value={60} visible={isVisible}>
          <HtmlIcon />
        </SkillBar>
        <SkillBar name="CSS3" value={60} visible={isVisible}>
          <CssIcon />
        </SkillBar>
        <SkillBar name="JavaScript" value={50} visible={isVisible}>
          <JsIcon />
        </SkillBar>
        <SkillBar name="Android" value={35} visible={isVisible}>
          <AndroidIcon />
        </SkillBar>
        <SkillBar name="Python" value={35} visible={isVisible}>
          <PythonIcon />
        </SkillBar>
      </div>
    </VisiblitySensor>
  );
};

export default SkillSet;
