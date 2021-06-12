import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useUpdateStore } from 'simple-redux-store';

const App = () => {
  const app = useSelector((s) => s.app);
  const updateStore = useUpdateStore();

  useEffect(() => {
    updateStore({ page: 'page1' });
  }, []);

  return (
    <div>
      {app.page} <Link to="/page2">goto page2</Link>
    </div>
  );
};

export default App;
