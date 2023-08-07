// 컴포넌트 : 1) 함수형, 2) 클래스형 

// import Macaron from "./Macaron"; //여기서 가져와야지 밑에 함수에서도 사용가능하다 
// import Cakes from "./cakes.json"; //cake 배열 

// // 함수형 컴포넌트 => 함수이름을 지정할땐 대문자로 시작 = 파일이름 만들때도 마찬가지 ex)App.js
// function App() {
//   return ( //함수호출한곳에 값을 되돌려주는 의미- 꼭써줘야지 사용가능하다
//     // 밑 div는 html의 div가 아니라 jsx의 div라서 class대신 className이라고 써야해 
//     // 자식이 두개이상일경우 반드시 부모로 묶어줘야해(div로해줘도 되고 css적용하지 않을거면 빈 부등호가능)
//     <>
//     <div className="App">"안녕하세요!!"</div>
//     {/* 변수든 배열이든 중괄호 안에 써줘 */}
//     {/* 배열에 있는 요소하나하나 가져와서 새로운 배열을 만들어준다:map */}
//     {/* 마카롱 컴포넌트 값이 10개 필요*/}
//     {Cakes.map(cake => (
//       //마카롱함수 호출할때 속성값 내보내기 방법
//       <Macaron 
//         propsid={cake.id} //택배회사 = {택배상자 포장할건데 cake에서.보낼데이터속성값}
//         propsname={cake.name}
//         propsimage={cake.images}
//       />
//     ))} {/*마카롱 함수에 괄호안에 div가 있기때문에 괄호를 써줌 */}
//     </>
//   );
// }

/*
export default App; //어디서든 사용할 수 있게 내보내줘야지 다른곳에서import해서 사용할 수 있게헌더
*/
// 리액트앱을 라이브서버처럼 실행하고 싶으면 터미널 창에 npm start / npx start쳐줘야해 

// ---------------리엑트에서 데이터 관리
// 1)props프로퍼티: 상위컴포넌트에서 하위컴포넌트로 전달되는 읽기전용데이터(부모가 자식에게 전달하는 한쪽방향방식) / 변경이 안된다=> 객체(Object)형태로 전달
// 2)state프로퍼티: 컴포넌트 상태인 state를 저장하고 변경할 수 있는 데이터 / 클래스형 컴포넌트에서만 사용할 수 있다.


// cakes.json :보통 서버형태로 저장되기에 이를 불러오는 방법도 배워야함
// json은 속성과 값이 ""안에 묶어져있다.
// 대괄호: 배열 / {"속성":"속성값"}:객체 / json파일에선 속성과 값을 ""에 묶어준다
// 배열안에 객체 10개

import React, { Component } from 'react'
import Food from './Food';

// export지워줘 
class App extends Component {
  // 생명주기함수
  // 처음 실행할때 constructor 써주고 
  constructor(props){
    // super: 부모클래스의 생성자를 호출하는 역할을 합니다. 이 경우에는 React.Component 클래스의 생성자를 호출하여 부모 클래스의 기능을 상속받고, props를 전달하여 초기화합니다.
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
  }

  componentDidMount(){
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면(render로) 실행되는 함수(데이터가 쌓여서)');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로그려지면 즉 업데이트 되면 실행되는 함수');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때(를 제거될때) 실행되는 함수');
  }
  // 컴포넌트값저장하는거 랜더 함수 밖에서 선언! 
  state = {
    count:0,
    sum: 0,
    avg:0,
  }
  // add랑 minus 함수 아래에서 사용하려면 만들어주기 
  add = () => {
    console.log('더하기');
    // this.state.count = 1;
    // this.setState({count:1});
    this.setState({count:this.state.count + 1});
  }
  // setState함수 실행되면 자동으로 생명주기함수 실행된다
  minus = () => {
    console.log('빼기');
    // this.state.count = -1;
    // this.setState({count:-1});
    // this.setState({count:this.state.count - 1});

    // current에 this.state가 들어온다 
    //위에 state작성한 안에꺼{count, sum, avg 속성들} 모두 지정하고 싶을떄 
    this.setState(current => ( //괄호열고; 대괄호 넣기전에 묶어줘야해 ;  state = {이부분 전부 복사 붙여넣기}
      {
        count:current.count-1,
        sum: current.count-2,
        avg: current.count-3,
      }
    ));
  }

  // 화면이 그려지는 함수 : render(){}
  render() {
    // 위에서 선언한 count를 render함수에서 사용하려면 구조분해 할당해야지 불러올수 있다
    const {count,sum,avg} = this.state; //this=현재 컴포넌트; App 의.state이다. 
    return (
      <>
        <div>App</div>
        <div>
          <h1>현재 숫자는 {count}입니다</h1>
          <button onClick = {this.add}>더하기 </button> {/*현재 컴포넌트에 add라는 함수를 실행해라*/}
          <button onClick = {this.minus}>빼기 </button> {/*현재 컴포넌트에 minus라는 함수를 실행해라*/}
        </div>
        <Food />
      </>
    )
  }
}
export default App

