import * as React from 'react';
import "../main.css";
import FourOhFour from '../components/FourOhFour/FourOhFour.jsx';
import Menu from '../components/Menu/Menu';
import WindowTo from '../components/WindowTo/WindowTo';
import Social from '../components/Social/Social';

const IndexPage = () => (
  <main id="entry">
    <title>nickyb.cool</title>
    <div class="main-strip">
      <Menu />
      <WindowTo />
    </div>
    <Social />
  </main>
);

export default IndexPage;
