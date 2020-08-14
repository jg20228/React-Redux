import React from 'react';
import AddNumber from './AddNumber';

const AddNumberRoot = (props) => {
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber onAdd={props.onAdd} />
    </div>
  );
};

export default AddNumberRoot;
