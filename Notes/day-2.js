// const rootDiv = document.getElementById('root');

// const greeting = document.createElement('p');
// greeting.innerHTML = "Hello from React App";

// const time  = document.createElement('p');
// time.innerHTML = `It is ` + (new Date()).toLocaleTimeString();

// console.log(greeting);
// rootDiv.appendChild(greeting);
// rootDiv.appendChild(time);

// const myAge = 18;

// const greeting = <p>Hello from React App</p>
// const time = <p>It is { new Date().toLocaleTimeString() }</p>
// const twoPlusTwo = <p>2 + 2 = {2 + 2}</p>
// const olderThan18 = <p>Am I 18 years or older: { myAge >= 18 ? 'yes' : 'no' }</p>

// setInterval(() => {
//   ReactDOM.render(
//     <div>
//       { greeting }
//       <p>It is { new Date().toLocaleTimeString() }</p>
//       { twoPlusTwo }
//       { olderThan18 }
//     </div>,
//     document.getElementById('root')
//   )
// }, 1000);

// const Greeting = (props) => {
//   return (
//     <>
//       <h1>Hello {props.name}</h1>
//       <h2>You are {props.age} years old</h2>
//     </>
//   )
// }

// const Post = (props) => {
//   return(
//     <div>
//       <img src={props.profileImage}/>
//       <p><strong>{props.name}</strong></p>
//       <p>{props.text}</p>
//       <button>Like</button>
//       <button>Share</button>
//     </div>
//   )
// }

// class MyComponent extends React.Component {
//   render() {
//     return <h2>This is my component</h2>
//   }
// }

// ReactDOM.render(
//   <div>
//     <Post profileImage={"https://i.pravatar.cc/150?img=3"} name="Jacob DiFede" text="Learning React with BitWise"></Post>
//   </div>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <div>
//     <Greeting name="Jacob" age={18} />
//     <MyComponent />
//   </div>,
//   document.getElementById('root')
// )