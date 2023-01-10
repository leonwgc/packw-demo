import React from 'react';
import { Button, Divider } from 'react-uni-comps';

const Page1 = ({ history }) => {
  return (
    <div>
      <div
        style={{ background: '#005cff', color: '#fff', padding: '30px 12px' }}
        onClick={() => history.push('/page2')}
      >
        go to page2
      </div>
      <Divider />
      <Button as="div" block style={{ color: '#005cff', fontSize: 20 }}>
        this is page1
      </Button>
    </div>
  );
};

export default Page1;
