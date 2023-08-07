import React from 'react'; //react라는 모듈을 가져와서 React라는 이름으로 사용하겠다 
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* root라는 id에 app.js를 연결한다 */}
  </React.StrictMode>
);
// index.js는 root랑 app.js를 연결시켜주는 역할 - 건들지않는다 
// spa: single page application - html밖에 없다 모두 App 컴포넌트에넣어줘야해(할아부지)에서 손자들까지