# State and Events

## What is react state?

- Built-in React object which contains data or information about the component.
- State can be modified based on user action or network changes and component re-renders the browser whenever changes happen.
- The state object is initialized in the constructor and it can store multiple properties.
- When wanting to change the state of the object, there are two ways of doing that depending on which component is being used:  
  - **Class component:** `this.setState()`  
  - **Function component:** `setState()`  

### Demonstration of state in React app

In the codes below usage of states is demonstrated using both Class and Function components.  
The state of name object is initialized in the beginning and then referred in HTML tag.

#### Class component


```
import React from 'react';   
import './App.css';
  
class App extends React.Component {  
  state = {  
    name: "John"  
  };
    
  render() {
    return(            
       <div>  
          <p>{this.state.name}</p>  
       </div>  
    )  
  }  
}  
  
export default App;
```

#### Function component


```
import React, {useState} from 'react'; 
import './App.css'; 
  
function App () {
  const [name, setName] = useState('Bill');  
    
  return(          
    <div> 
       <p>{name}</p> 
    </div>  
  )  
}; 
  
export default App;
```


## What is an event?

- Event is an action that can be triggered by user action or system generated event e.g.:
  - Mouse click
  - Pressing a key
  - Loading of a web page
  - Window resizing

- They are named using **camelCase**.
- In React you can't return false to prevent default behaviour. Instead you can prevent it is by calling `preventDefault` event like in the example below:


```
import React, { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({firstname: '', lastname: ''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const formSubmitted = (event) => {
    event.preventDefault();
    // Do something with you data
  }

  return (
    <div className="App">
      <form onSubmit={formSubmitted}>
        <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
        <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged} />
        <input type="submit" value="Submit" />
      </form>
    </div>
);

export default App;
```

*In the code, `preventDefault` event is used in a function which is being called when clicking the submit button. Now you can handle form's data before it's being submitted forward. Without preventing submit button's default functionality, the form is sent forward.* 


## How are events handled in React

- There are synthetic and native events.
- The React uses synthetic events and they are very similar as handling events on DOM elements.
- Synthetics events are cross-browser compatible. For example it can provide common names for all events across browsers. 
- Using synthetic events increases the performance of the application as React reuses the event object.
- It is recommended to not use synthetic and DOM events that rely on each other. Otherwise you may run into some unexpected behavior. 

### Demonstrations of event handling

#### Counter example

In this example you can see DOM event `onClick` in use. Whenever button is clicked, the counter will increase by one and the result is displayed on the browser.

```
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      You have pressed the button {count} times<br />
      <button onClick={() => setCount(count + 1)}>Press me</button>
    </div>
  );
}

export default App;
```


https://user-images.githubusercontent.com/75015030/178139628-66a990f4-327d-4173-8f1e-99cabf7d2254.mp4


#### Name example

In this example you can see synthetic event `onChange` in use. When user types his name in the input field, it is being updated on the browser as the state changes. With JSX, a function is passed as the event handler instead of a string.

```
import React, {useState} from 'react';
import './App.css';
  
function App () { 
  const[name, setName] = useState('');
  const updateName = (e) =>  { 
    setName(e.target.value); 
  } 
  
  return( 
     <div className="App">           
        <label>Name:</label>
        <input type="text" value={name} name="name" onChange={updateName} /><br />
        <input type="submit" value="Submit" />
        {name}
     </div>
   ) 
} 
  
export default App;
```


https://user-images.githubusercontent.com/75015030/178139839-c16b1adb-468a-4799-b490-75ff66d14279.mp4

