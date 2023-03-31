import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Question from "./Component/QuestionBlog/Question";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="hr-line" />
      <Home></Home>
      <hr className="hr-line" />
      <Question></Question>
    </div>
  );
}

export default App;
