import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( <App />, document.getElementById('root'));

// import App from './App'을 통해 App 컴포넌트를 불러옴.
// ReactDom.render() 함수의 첫번째 인자로 <App />을 전달함으로써 App 컴포넌트가 반환하는 것들을 화면에 그릴 수 있음.
// ReactDom.render() 함수의 두번째 인자로 App 컴포넌트가 그려질 위치 지정. -> id가 root인 엘리먼트에 그려라.
// id에 대한 설명은 index.html에 있음.
