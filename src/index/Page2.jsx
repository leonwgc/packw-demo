import React from 'react';

const Page2 = ({ history }) => {
  return (
    <div>
      <div
        style={{
          padding: '30px 12px',
          border: '1px solid #005cff',
          textAlign: 'center',
          fontSize: 24,
        }}
        onClick={() => history.push('/page1')}
      >
        go to page1
      </div>
      <div style={{ color: '#005cff', fontSize: 20 }}>this is page2</div>
    </div>
  );
};

export default Page2;
