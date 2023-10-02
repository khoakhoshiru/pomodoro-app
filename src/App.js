import "./App.css";
// import Clock from "./component/Clock";
import Clock2 from "./component/Clock2";
// import Header from "./component/Header";
// import Body from "./component/Body";
import TodoList from "./component/TodoList";
function App() {
  return (
    <div className="App text-center ">
      {/* <Header />

      <Body /> */}

      {/* todolist */}
      <TodoList />
      {/* <Clock />
       */}
      <Clock2 />
    </div>
  );
}

export default App;
