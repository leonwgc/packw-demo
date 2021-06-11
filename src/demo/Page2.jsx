import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      page2 <Link to="/page1"></Link> goto page1
    </div>
  );
};

export default App;
