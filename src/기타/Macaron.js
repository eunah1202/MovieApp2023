// Macaron.js
// src폴더안에 대문자로 시작하는 폴더를 만들어서 작업한다

// 클래스형 컴포넌트 => rce입력 
/*
import React, { Component } from 'react' //component가 원본이라면 Macaron은 상속받는 객체다

class Macaron extends Component { //우리가 만든 macaron이라는 클라스는 react에 있는 component클라스의 기능을 상속 받을 것이라는 의미 
  render() {
    return (
      <div>Macaron</div>
    )
  }
}
export default Macaron //마지막에 export라고 내보내야지 사용할 수 있음 
*/

// 함수형 컴포넌트(클래스형 컴포넌트보다 사용빈도가 현저히 높다) => rfce입력
import React from 'react'
// 매개변수 props 
// props가 객체형태로 입력됨

// 1
// function Macaron(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>No.{props.propsid} </h1>  
//       <h2>Name: {props.propsname} </h2>  
//       <img src={props.propsimage} alt={props.propsname} width={200} height={200}/>
//     </div>
//   )
// }

// 2
// function Macaron(props) {
//   console.log(props);
//   const {propsname, propsid, propsimage} = props; //구조분해할당(객체형태로 들어온 props를 뜯어봤더니 구성되어있는 속성값들 나열해주는것)
//   return (
//     <div>
//       <h1>No.{propsid} </h1>  {/*바로 속성이름만 쓰면 됨 */}
//       <h2>Name: {propsname} </h2>  
//       <img src={propsimage} alt={propsname} width={200} height={200}/>
//     </div>
//   )
// }

// 3
function Macaron({propsname, propsid, propsimage}) {//구조분해할당형태로 여기서 받아
  return (
    <div>
      <h1>No.{propsid} </h1>  {/*바로 속성이름만 쓰면 됨 */}
      <h2>Name: {propsname} </h2>  
      <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
}

export default Macaron