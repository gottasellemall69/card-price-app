import React from 'react';

import Home  from '@/pages/Home.page';

export default Home;

const isBrowser=typeof window!=='undefined';

if(isBrowser) {
  (
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById('root')
  );
}