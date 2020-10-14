import React from 'react';

// class App extends Component {
//   render() {
//     // const greeting = "Hello, React!";
//     return (
//         // return以下は一つのタグを返すようにする、これは仕様。二つ以上返す場合は空タグで囲えばOK */}
//       <>
//         <label htmlFor="bar">bar</label>
//         < input input type="text" onClick={() => { console.log("clicked!") }}></input>
//       </ >
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Jack", age: 25 },
    { name: "koo", age: 40 },
    { name: "wey"}
  ]
  return (
    <>
      {/* <User name={"Taro"} age={10}></User>
      <User name={"Jack"} age={25}></User> */}
      {profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index}></User>
      })}
    </>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

// もしPropsに要素がない場合、予め設定しておくこと記述
User.defaultProps = {
  age:1
}


export default App;
