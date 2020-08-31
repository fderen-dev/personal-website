import React, { useState } from 'react';
import VisiblitySensor from 'react-visibility-sensor';

import SkillBar from '../../components/SkillBar';

//@ts-ignore
import HtmlIcon from '../../static/html5.svg';
//@ts-ignore
import CssIcon from '../../static/css.svg';
//@ts-ignore
import JsIcon from '../../static/js.svg';
//@ts-ignore
import Ricon from '../../static/react-icon.svg';

import './SkillsSet.scss';

const SkillsSet: React.FunctionComponent = () => {
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
        <SkillBar name="React" value={70} visible={isVisible}>
          <Ricon />
        </SkillBar>
      </div>
    </VisiblitySensor>
  );
};

export default SkillsSet;
