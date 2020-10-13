import React, { Component } from 'react';

class App extends Component {
  render() {
    // const greeting = "Hello, React!";
    return (
        // return以下は一つのタグを返すようにする、これは仕様。二つ以上返す場合は空タグで囲えばOK */}
      <>
        <label htmlFor="bar">bar</label>
        < input input type="text" onClick={() => { console.log("clicked!") }}></input>
      </ >
    )
  }
}

export default App;
