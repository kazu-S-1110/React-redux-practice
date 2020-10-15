import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class App extends Component {
  render() {
    const props = this.props
    return (
      <>
        <Title>value : {props.value}</Title>
        <Container>
          <Button onClick={props.increment}>+1</Button>
          <Button onClick={props.decrement}>-1</Button>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

// mapDispatchToProps の省略形
// const mapDispatchToProps = ({ increment, decrement})


export default connect(mapStateToProps, mapDispatchToProps)(App)


// StyledComponentの実装
const Title = styled.h1`
  font-size:60px;
  background-color: lightblue;
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
