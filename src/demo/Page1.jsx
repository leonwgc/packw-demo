import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      page1 <Link to="/page2"></Link> goto page2
    </div>
  );
};

export default App;
