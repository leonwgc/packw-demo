import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useUpdateEffect, useMountEffect } from 'whooks';

const App = () => {
  const [v, setV] = useState('');
  useMountEffect(() => {
    console.log('mounted');
  });

  useUpdateEffect(() => {
    console.log('updated');
  }, [v]);

  return (
    <div>
      <Input value={v} onChange={(e) => setV(e.target.value)} />
    </div>
  );
};

export default App;
