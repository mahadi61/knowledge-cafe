import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Question from "./Component/QuestionBlog/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="hr-line" />
      <Home></Home>
      <hr className="hr-line" />
      <Question></Question>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
