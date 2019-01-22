import React from "react";
import { render } from "react-dom";
import App from './App'

const state = {
    todos: [
        {id: 1, name: 'Main Bola', isComplete: true}, 
        {id: 2, name: 'Main PES', isComplete: true},
        {id: 3, name: 'Main PUBG', isComplete: true}
    ]
}
render(<App todos={state.todos}/>, document.getElementById("root"));
