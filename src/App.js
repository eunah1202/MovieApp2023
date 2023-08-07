// App.js
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './componenets/Navigation'
import Home from './routes/Home'
import About from './routes/About'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        {/* // 주소창의 path를 이용해 지정한 컴포넌트 나와라 하는 것 ; Route */}
        <Route path="/" element={<Home />} /> {/* //도메인 부분에 /일때 home컴포넌트가 나와라  */}
        <Route path="/about" element={<About />} /> {/*//도메인 부분에 path부분에 /about 일때 어떤 엘리먼트가 나올지 지정해주는것 = about컴포넌트가 나와라 지정하는것   */}
      </Routes>
    </BrowserRouter>
  )
}

export default App