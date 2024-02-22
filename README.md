
# Namaste React 🚀

<<<<<<< HEAD
# Episode 1 - Inception
=======
##Episode 1 - Inception
>>>>>>> c3563dc64d6ecc6caa6cbeaa81c3999015af3a7a
1. What is Emmet?
Emmet is a plugin or developer tool kit that helps make your work faster and substantially enhances HTML and CSS workflows.
Emmet was created by Sergey Chikuyonok. The original name was "Zen Coding." Emmet is available for many editors including Atom, Eclipse, Emacs, Notepad++, Sublime, Vim, Visual Studio (VS) Code, and WebStorm. However, some implementations do not support all the defined snippets and actions.
2. Difference between a Library and Framework?Definition. Libraries provide developers with predefined functions and classes to make their work easier and boost the development process. Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.
3. What is CDN? Why do we use it?A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications
4. Why is React known as React?It "reacts" quickly to changes without reloading the whole page. React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.”
5. What is crossorigin in script tag?The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
6. What is diference between React and ReactDOMReact provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment. 
7. What is difference between react.development.js and react.production.js files via CDN?By default, React. js builds your project in development mode, which includes features like detailed error messages and debugging tools. However, when you're ready to deploy your application, it's important to build it in production mode to benefit from optimized performance and reduced bundle size.

<<<<<<< HEAD
# Episode 2 - Igniting our App
=======
##Episode 2 - Igniting our App

>>>>>>> c3563dc64d6ecc6caa6cbeaa81c3999015af3a7a

# Episode 3 - Laying The Foundation

# Episode 4 - Talk is cheap, Show me the code

# Episode 5 - Lets get hooks

Two types of export

1. Default export
   export default Component-name;
   import Component-name from "path"
2. Named Export
   export const Component-name
   import {Component-name} from "path"

3. Can we do default export as well as with named export??
-

#HOOKS - it is a simple js utility function
Two types of hooks-
1. useState - it makes superpowerful variable
Ans- SO whenever the useState variable is updated then that component will rerender
2. useEffect - 

# Episode 6 - Exploring the world

1. we learn how the monolith and microservice architecture works in the big project or application
2. #useEffect - this hook will execute when the whole component render then afterwards the useEffect hook will call and in that this hook contains two parameter, one is callback function(arrow function) and second one is dependencies(array)
3. And also learn about how can we use shimmer ui by using Conditional Rendering(which means a rendering by some condition)
4. Also see the search functionality and how we can fetch live data of swiggy by using async and await
5. And the last how we can resolved the cors policy issue by using corsproxy.io adding in the url

# Episode 7 - Finding the path

1. useEffect - 
   if no dependency array then the useeffect is called every component render
   if the dependency array is there then the useEffect is called in the intial component render
   if the dependency array contain some vairable then the useEffect will called only when that variable is updated 

2. Routing - 
   a. createBrowserRouter - which is used to create a route configuration
   b. RouterProvider - and after creating router configuration we have to configure this into app so that we can route
   c. We can show Custom Error page if the user will route some different name then we can show out Error Page and in that we can use the special hook called #useRouteError which gives the error information which we can use that info to showcase in our error page