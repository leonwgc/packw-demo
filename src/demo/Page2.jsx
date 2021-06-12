import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useUpdateStore } from 'simple-redux-store';

const App = () => {
  const app = useSelector((s) => s.app);
  const updateStore = useUpdateStore();

  useEffect(() => {
    updateStore({ page: 'page2' });
  }, []);

  return (
    <div>
      {app.name}/{app.page} <Link to="/page1">goto page1</Link>
    </div>
  );
};

export default App;
