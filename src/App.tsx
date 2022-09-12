// Solid JS Imports
import { createSignal, For} from "solid-js";
// Styling Imports
import { css } from "solid-styled-components";
// Component Imports
import { Item } from "./item";
import { AddTodo } from "./addTodo";
// Type Imports
import type { Component } from 'solid-js';

//Styling
const ContainerStyles = css`
  width: 500px;
  margin: 0 auto;
  background-color: rgba(79, 136, 198, 0.7);
  color: #FFF;
  padding: 10px;
  height: 100vh;
`

// Types
type TodoItem = {
    text: string;
    complete: boolean;
}
const App: Component = () => {
  const [todos, setTodos] = createSignal<TodoItem[]>([
      { text: "Wake up from the Dream", complete: false},
      { text: "Have a new Dream!", complete: true }
  ]);

  return (
    <div class={ContainerStyles}>
      <h1>TODOs</h1>
        <ul>
            <For each={todos()}>{(todo: TodoItem) => <Item todo={todo} setTodos={setTodos} />}</For>
        </ul>
        <AddTodo setTodos={setTodos} />
    </div>
  );
};

export default App;
