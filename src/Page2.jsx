import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Divider, InputNumber } from 'react-uni-comps';

const Page2 = ({ dispatch, state }) => {
  const history = useHistory();

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

      <div>
        <div>
          name from useReducer:<b>{state.name}</b>
        </div>
        <Divider />
        <div>
          age from useReducer:<b>{state.age}</b>
        </div>
        <Divider />
        <InputNumber
          placeholder="input your age"
          value={state.age}
          onChange={(v) => {
            dispatch({ type: 'update', payload: { age: v } });
          }}
        />
      </div>
    </div>
  );
};

export default Page2;
