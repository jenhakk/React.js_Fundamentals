# Hooks

## What are React Hooks?

- Hooks let you use state and other React features without writing a class.
- React provides a few built-in Hooks like useState and useEffect.
- You can also create your own custom Hooks which you can e.g. use to share and reuse stateful logic in several components.
### Hooks have three additional rules:

#### 1. Hooks can only be called at the top level. 
- Don't call them inside loops, conditions or nested functions.
- It ensures that Hooks are called in the same order each time components render.
#### 2. You can call Hooks from React function components. 
- Don't call them from Class functions or any regular JavaScript functions.
- Instead you can call them from function components.
- You can also call them from custom Hooks.
#### 3. Hooks can't be conditional


## Demonstration of using Hooks:

In the code below there is a simple counter which adds one (1) to counter after each render. We have used **two Hooks**: `useState` to define count state's default value and `useEffect` to run functions after each render. `setTimeout` calls `setCount` after one second which adds one to count state and page is re-rendered. 

```
import { useState, useEffect } from "react";
import "./App.css";
  
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div className="App">
      <h1>I've rendered {count} times!</h1>
    </div>
  );
}
  
export default App;
```

https://user-images.githubusercontent.com/75015030/179346204-54caf759-cf07-419c-8e0d-2770b760df45.mp4



