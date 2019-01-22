import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App-Header">
        <h2>Welcome To TODO List Using React-Redux</h2>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div className="Todo-List">
            <ul>
              {this.props.todos.map(todo => (
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
