import React from 'react';

import Gears from '../containers/Gears';
import SkillsSet from '../containers/SkillsSet';
import SEO from '../components/SEO';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

import './index.scss';

const IndexPage: React.FunctionComponent = () => {
  useInfiniteScroll();

  return (
    <main id="main">
      <SEO />
      <section className="title">
        <div>
          <h1>Filip Derenowski</h1>
          <h3 className="typewriter">Full-stack developer</h3>
        </div>
      </section>
      <section className="about">
        <h2>about</h2>
        <p>
          Born, raised and graduated computer science in Opole, Poland - I am
          full-stack developer, React.js, gym, tattoos, cats and TV series
          enthusiast!
          <br />
          Here are my{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://github.com/fderen-dev"
          >
            github
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/fderen-dev"
          >
            linked in
          </a>
          .
        </p>
      </section>
      <section className="skills">
        <h2>skills</h2>
        <div className="stats-container">
          <SkillsSet />
        </div>
      </section>
      <section className="title clone">
        <div>
          <span className="h1">Filip Derenowski</span>
          <h3 className="typewriter">Full-stack developer</h3>
        </div>
      </section>
      <Gears />
    </main>
  );
};

export default IndexPage;
