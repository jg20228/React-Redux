import React from 'react';
import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

//dispatch가 지금은 null인데 myEvent가 맨밑에서 return될때 리듀서를 준다.
const actionProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch({ type: 'INCREMENT' });
    },
  };
};

//첫번째는 props인데 (state, action)
//두번째는 컴포넌트(실제 컴포넌트)

//return을할때 두번째가 return 되는데 props를 2개를 넘길 수 있음 AddNumber에게
export default connect(null, actionProps)(AddNumber);
