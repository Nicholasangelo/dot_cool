import * as React from 'react';
import "../main.css";
import { MainStrip, Social } from '../components';

const IndexPage = () => (
  <main id="entry">
    <title>nickyb.cool</title>
    <MainStrip />
    <div className='bottom-strip'>
      <Social />
    </div>
  </main>
);

export default IndexPage;
