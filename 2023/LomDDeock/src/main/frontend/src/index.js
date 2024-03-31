import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 사용자 정보
const userInfo = {
    // 로그인 여부(true = 로그인, false = 비 로그인)
    isLoggedIn : false,
    member: {}
};

// reducer 생성
const reducer = (state = userInfo, action) => {
    switch(action.type) {
        // 사용자 정보 세팅
        case "SET_INFO":
            return action.payload;
        case "GET_USER_INFO":
            return state;
        default:
            return state;
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);
root.render(
  /*<React.StrictMode>*/
    <Provider store={store}>
      <App />
    </Provider>
  /*</React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
