// Food.js
      // 컴포넌트는 src폴더 내에 만든다 & 대문자로 시작해야해

import React, { Component } from 'react'

class Food extends Component {
  // 여기서 사용하는 컴포넌트 따로 만들어줌
  state = {
    price: 10000,
    discountPrice: 0,
  }

  discount=()=>{
    console.log('할인');
    this.setState(current => ( //current는 this.state
      {discountPrice: current.price * 0.7}
    ));
  }

  render() {
    const{price,discountPrice} = this.state; 
    return (
      <>
      <div>food</div>
      <h1>Food 가격 :{price}원</h1>
      <h2>할인가격 : {discountPrice}</h2>
      <button onClick={this.discount}>30% 할인</button>
      </>
    )
  }
}
export default Food