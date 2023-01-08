import React from 'react';
import { Button } from 'react-uni-comps';

const Page1 = ({ history }) => {
  return (
    <div>
      <Button
        as="div"
        type="primary"
        block
        onClick={() => history.push('/page2')}
      >
        go to page2
      </Button>

      <div>this is page 1</div>
    </div>
  );
};

export default Page1;
