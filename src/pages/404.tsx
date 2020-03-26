import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
} from 'react';

import SEO from '../components/SEO';
import Gear from '../components/Gear';

import '../components/Layout.scss';
import './404.scss';

const subtitles: Array<string> = [
  '404',
  'Quo vadis?',
  'Looking for something?',
];

const NotFoundPage: FunctionComponent = () => {
  const [subtitleIdx, setSubtitleIdx] = useState<number>(0);
  const intervalHandlerRef: MutableRefObject<NodeJS.Timeout | null> = useRef(
    null
  );
  useEffect(() => {
    intervalHandlerRef.current = setInterval(() => {
      if (subtitleIdx < subtitles.length - 1) {
        setSubtitleIdx(prevIdx => prevIdx + 1);
      } else setSubtitleIdx(0);
    }, 7000);
    return () => {
      if (intervalHandlerRef.current !== null)
        clearInterval(intervalHandlerRef.current);
    };
  }, [subtitleIdx]);
  return (
    <div className="not-found">
      <SEO />
      <Gear move moveDir="up" className="gear" />
      <div className="subtitle">
        <h2>{subtitles[subtitleIdx]}</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
