import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import Coming from "./components/Coming";
// import { createBrowserHistory } from "history";


function App() {
  // const history = createBrowserHistory();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coming" element={<Coming />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
