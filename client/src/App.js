import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Lessons from "./Lessons/Lessons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Lessons
          path="/Lessons" />
        </Router>
      </header>
    </div>
  );
}

export default App;
