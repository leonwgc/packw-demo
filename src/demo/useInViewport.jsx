import React, { useEffect, useRef } from 'react';
import { useInViewport } from 'whooks';

const App = () => {
  const ref = useRef();

  const isInViewPort = useInViewport(ref);

  useEffect(() => {
    console.log(isInViewPort);
  }, [isInViewPort]);

  return (
    <div>
      <div style={{ height: 2000, border: '1px solid blue' }}>
        <div ref={ref} style={{ width: 100, height: 100, background: '#00bc8d' }}></div>
      </div>
    </div>
  );
};

export default App;
