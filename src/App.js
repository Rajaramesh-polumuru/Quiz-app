import React from "react";
import "./App.css";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Body key={"leftQuiz"} />
      <Body key={"rightQuiz"} />
    </div>
  );
}

export default App;
