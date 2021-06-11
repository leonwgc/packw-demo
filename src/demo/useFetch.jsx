import React from 'react';
import { Spin } from 'antd';
import { useFetch } from 'whooks';

const App = () => {
  const { data, error, loading } = useFetch('https://api.zuifuli.com/api/cashier/v5/channel/unit');

  return <div>{loading ? <Spin spinning={true} /> : error ? 'error' : JSON.stringify(data)}</div>;
};

export default App;
