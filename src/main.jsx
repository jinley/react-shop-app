import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' // react 컴포넌트에 redux 스토어를 제공
import App from './App.jsx' // 메인 리액트 컴포넌트
import './global.scss'
import { store } from './store' // 리덕스 스토어

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App /> 
  </Provider>,
)

