import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Divider, Input } from 'react-uni-comps';

const Page1 = ({ dispatch, state }) => {
  const history = useHistory();
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

      <div>
        <div>
          name from useReducer:<b>{state.name}</b>
        </div>
        <Divider />
        <div>
          age from useReducer:<b>{state.age}</b>
        </div>
        <Divider />
        <div>
          <Input
            placeholder="input your name"
            value={state.name}
            onChange={(v) => {
              dispatch({ type: 'update', payload: { name: v } });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
