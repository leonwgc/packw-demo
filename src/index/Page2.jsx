import React from 'react';
import { Button } from 'react-uni-comps';

const Page2 = ({ history }) => {
  return (
    <div>
      <Button
        as="div"
        style={{ height: 60 }}
        block
        outlined
        onClick={() => history.push('/page1')}
      >
        go to page1
      </Button>

      <div>this is page 2</div>
    </div>
  );
};

export default Page2;
