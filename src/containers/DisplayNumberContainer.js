import React from 'react';
import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

//여기선 state가 null임
const stateProps = (state) => {
  return {
    number: state.number,
  };
};

//실제 state가 되는곳 State값을 넘기고
export default connect(stateProps, null)(DisplayNumber);
