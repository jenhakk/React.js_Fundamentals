# Single-page app

Single-page apps are different from the traditional multi-page apps. The biggest difference is that you don't have to navigate to an entirely new page with single-page app. Instead your pages usually load inline within the same page itself. 

When creating multi-page apps you automatically can:
  - See the URL displayed in the address bar.
  - Use browser's back and forward buttons.
  - Can navigate to a particular view directly using the appropriate URL.

With single-page apps you are not navigating to an entirely new page so you must do these by yourself using technique called Routing. Routing is where you map URLs to destinations that aren't physical pages. You get routing from JavaScript library called **React Router**.

## How to create a single-page app with React step by step

### 1. Installation

First, create a new React app and then install React Router

`npx create-react-app singlepageapp`

`cd singlepageapp`

`npm install react-router-dom`

### 2. Creating pages for navigation bar

On the app there’s going to be a navigation bar, where you can switch between different pages. Here the pages are different components and we create a folder for them inside the src folder. Let’s call the folder **components**.

  1. Click **src** with right-click and choose **New Folder** and name it.
  2. Inside the components folder, let’s create .js files for the pages. In this example, we’ll create **Home**, **About** and **Contact** pages by right-clicking src folder and choosing **New File**.
 
![components](https://user-images.githubusercontent.com/75015030/179348649-b52e32f7-d124-454d-a3f1-37624d1707f6.png)


### 3. Creating content for pages

Start by importing React library. Add wanted content inside `return` statement. Note that return statement accepts only one element, so wrap your content inside element like `<div>`. Finally add the export line at the end so other components can import it. Repeat these for all page files.

#### Home.js

![home](https://user-images.githubusercontent.com/75015030/179348855-ccc3a758-24e4-4ae3-82e3-25282d7dd982.png)

#### About.js

![about](https://user-images.githubusercontent.com/75015030/179348907-c22594ff-3d49-44f3-9e8f-7da3fb123b03.png)

#### Contact.js

![contact](https://user-images.githubusercontent.com/75015030/179348918-ce479841-de97-41e9-9683-62451b81132c.png)


### 4. Creating navbar with Router

Open App.js and remove everything inside `div` element.

![div](https://user-images.githubusercontent.com/75015030/179349046-99ff46be-8c9c-4d62-a096-3f8b597e4fc9.png)

Then let’s import all created pages and components needed to create navigation. 

![imports](https://user-images.githubusercontent.com/75015030/179349060-6505cf42-d8c1-4537-b046-f2814a8fea93.png)

After making preparation, let’s start creating the actual navigation bar. There are multiple different ways to create navigation bars, but here’s a one simple way to do it.

- Let’s start by connecting the browser to wanted urls. Add `<BrowserRouter>` component inside the `<div>` element and make another `<div>` element inside it.
- After that let’s create visible navigation links with `<Link>` component. `to=` props defines the end point for the navigation when the link is pressed.
- `<Route>` component renders the defined component if the location matches. Basically, it creates paths for the pages. 
- Application has multiple links so let’s wrap `<Route>` components inside `<Routes>`.

Below you can see the final code for App.js

![router](https://user-images.githubusercontent.com/75015030/179349254-671a378e-622c-48c4-8020-2b8bd7944e38.png)

Now your home page should look like this without editing CSS file.

![homepage](https://user-images.githubusercontent.com/75015030/179349453-af28430e-8a57-4fb9-a2e5-d73f0265914e.png)

### 5. Creating some visuality to pages

By editing App.css file you can easily add some visualization e.g. changing colors, fonts and layout.

Here you can see some changes in App.css. 

![css](https://user-images.githubusercontent.com/75015030/179349730-2f3c2c9e-744f-4211-bf49-965dbcd1264e.png)

Added classes for CSS to elements.

![homenew](https://user-images.githubusercontent.com/75015030/179349736-3b509177-bdd9-4988-8de9-ab4f56614945.jpg)

Final version of application

https://user-images.githubusercontent.com/75015030/179350109-dcbb855a-6588-4248-9bb5-3149bae676c1.mp4

