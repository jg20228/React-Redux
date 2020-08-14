import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//뿌리내리기, 메모리공간에 스토어가 만들어짐
const store = createStore(reducer);

//Provider로 store를 감싸면 모든 컴포넌트에서 다이렉트로 접근 할 수 있음
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
