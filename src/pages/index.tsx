import React, { FunctionComponent } from 'react';

import SkillSet from '../containers/SkillSet';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import './index.scss';

const IndexPage: FunctionComponent = () => (
  <Layout>
    <SEO />
    <section id="title">
      <div>
        <h1>Filip Derenowski</h1>
        <h3 className="typewriter">Full-stack developer</h3>
      </div>
    </section>
    <section id="about">
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
    <section id="skills">
      <h2>skills</h2>
      <div className="stats-container">
        <SkillSet />
      </div>
    </section>
    <section id="title" className="clone">
      <div>
        <h1>Filip Derenowski</h1>
        <h3 className="typewriter">Full-stack developer</h3>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
