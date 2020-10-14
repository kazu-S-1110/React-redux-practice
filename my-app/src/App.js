import React, { Component } from 'react';
import styled from 'styled-components'
 

//functional componentsの記述
const App  = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {
      count : 0
    }
  }
  handlePlusButton = () => {
    console.log("Plus!")
    this.setState({ count : this.state.count + 1})
  }
  handleMinusButton = () => {
    console.log("Minus!")
    this.setState({ count: this.state.count -1})
  }
  handleResetButton = () => {
    console.log("Restart!")
    this.setState({count: 0})
  }

  render() {
    return (
      <>
        <Title>count : {this.state.count}</Title>
        <Container>
          <Button onClick={this.handlePlusButton}>+1</Button>
          <Button onClick={this.handleMinusButton}>-1</Button>
          <Button onClick={this.handleResetButton}>reset</Button>
        </Container>
      </>
    )
  }
} 


 
// StyledComponentの実装
const Title = styled.h1`
  font-size:60px;
  background-color:lightblue;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`
const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.25em;
  text-decoration: none;
  height: 50px;
  width: 100px;
  font-size:25px;
  color: #FFF;
  background: #fd9535;/*背景色*/
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  margin-right:20px;
  
  /* margin: 0;
  top: 60%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) */
`
const Container = styled.div`
  height: 120px;
  width: 500px;
  margin: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  /* outline: 1px solid #000; */ //確認用
  //以下2行は子要素を中央に横並びにするスタイリング
  display:flex;
  justify-content:center;
`
export default App;
