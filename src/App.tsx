// Solid JS Imports
import { createSignal} from "solid-js";
// Styling Imports
import { css } from "solid-styled-components";
// Type Imports
import type { Component } from 'solid-js';

const ButtonStyles = css`
  boder-radius: 4px
`
const ContainerStyles = css`
  width: 500px;
  margin: 0 auto;
  background-color: rgba(79, 136, 198, 0.7);
  color: #FFF;
  padding: 10px;
  height: 100vh;
`

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increaseCount = () => {
    setCount(count() + 1)
  }
  return (
    <div class={ContainerStyles}>
      <h1>Hello World!</h1>
      <p>The current count {count()}</p>
      <button class={ButtonStyles} onClick={increaseCount}>Increase Counter</button>
    </div>
  );
};

export default App;
