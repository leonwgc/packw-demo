import React from 'react';
import { Button, Divider } from 'react-uni-comps';

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
      <Divider />
      <Button as="div" block outlined>
        this is page2
      </Button>
    </div>
  );
};

export default Page2;
