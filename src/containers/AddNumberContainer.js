import React from 'react';
import AddNumber from '../components/AddNumber';

//이렇게 랩핑하면 store값 변경되었을때 냅두는것
//간단한 방법 div로 감싸는것임.
const AddNumberContainer = () => {
  return (
    <div>
      <AddNumber />
    </div>
  );
};

export default AddNumberContainer;
