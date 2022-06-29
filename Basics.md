# React Basics

## 1. What is React.js

- React.js is an open source Javascript library used for developing user interfaces.
- It is developed by Facebook and it is declarative, efficient and flexible to use.
- It let's you compose complex UIs from components.
- It can render on the server using Node and on mobile apps using React Native.

## 2.  How to set up required tools to develop web applications with React?

 - Required installations: node.js, npm (Node Package Manager) and some editor e.g. Visual Studio Code

### Step by step

#### 1. Start by installing *node.js* (npm is included in the installation package), choose *LTS version*:
   - [Link for installers](https://nodejs.org/en/download/)

#### 2. Follow installation instructions, which are straightforward 
   - Accept the terms
   - Choose destination folder
   - You can custom which features are installed but we didn't change anything and clicked Next
   - Next you can select the checkbox to have necessary tools installed automatically (see image below). If you don’t want to do that, you can manually install dependencies by following instructions on the given link. 
    
![Install tools](/pics/install_tools.png)

#### 3. After completing installation command prompt opens and you can finish by following given instructions
   - When Powershell finishes all the installations (see image below), you are recommended to reboot your computer.

![Powershell](/pics/powershell.png)

#### 4. Next you are ready to create a new react app with your chosen editor
   - We are using Visual Studio Code and you can install it from [here](https://code.visualstudio.com).

## 3. What is React JSX?

-  JSX produces React “elements”.
-  React doesn't require using JSX but it's helpful when working with UI inside the JavaScript code.
-  It allows React to show useful error and warning messages.
-  You can put any Javascript expressions within braces inside JSX.

We can easily implement functionality with JavaScript to HTML by using JSX elements. In the image below you can see a small example of it. 

![JSX](/pics/jsx_example.png)

## 4. What are components in React?

- They are small, reusable and independent bits of code which are mostly created by using functions.
- Component take in parameter and returns something. **Note that return statement is the only mandatory thing in the component!**
- They serve the same purpose as the JavaScript function but they work in isolation.
- There are two types of components: **Class** and **Function**:

### Class Component

- Must include `extends React.Component` statement, which cretes an inheritance React.Component and gives your component access to React.Component function.
- Requires `render()` function.

### Function Component

- Behaves much same as Class component but can be written with less code and is easier to understand.
- It is recommended to use Function components with hooks **LINKKI TÄHÄN**

## How to create a new React app?

- Now you have installed node.js and your preferred editor, it is time to create your first React app!
- Write these commands on the editor’s terminal:

`npx create-react-app myproject` 
  
*This command creates a new folder according to given folder name (myproject).*  
  
`cd myproject`  
  
*This command moves you to the project folder.*  
  
`npm start`  
  
*This command starts the project, opens a browser and you can start editing the code in src/App.js in editor.*  
