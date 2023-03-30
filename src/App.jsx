import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="hr-line" />
      <Home></Home>
    </div>
  );
}

export default App;
