import { Component } from "react";
import Todo from "./components/Todo.js";
import "./App.css";

class App extends Component {
  state = {
    currentInput: "",
    todos: ["pre-fetch thing 1", "pre-fetch thing 2", "pre-fetch thing 3"], // will be a list of strings
  };
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <section id="to-do-container">
          {this.state.todos.map((todo, i) => (
            <Todo item={todo} key={i} />
          ))}
        </section>
        <br></br>
        <form id="create-to-do-form" onChange={() => console.log("submitting")}>
          <input
            type="text"
            onChange={(event) => {
              this.setState({ currentInput: event.target.value });
            }}
          />
          <input type="submit" value="Sumbit Todo" />
        </form>
      </div>
    );
  }
}

export default App;
