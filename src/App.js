import React, {lazy,Suspense, useState,useEffect} from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./reduxStore/appStore";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";


// lazy loading
// Chunking
// on demand loading
// Dynamic Loading
// Code Splitting
const About = lazy(()=> import("./Components/About"));


const AppLayout = () =>{
  const [userName,setUserName] = useState(); 

  useEffect(()=>{
    // Make a call Api and send the username and password
    const data = {
      name : "Krishna Sabat"
    }
    setUserName(data.name);
  },[])
    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedin : userName,setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
      </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children :[
      {
        path : "/",
        element : <Body />,
      },
      {
        path : "/about",
        element : <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>,
      },
      {
        path : "/contact",
        element : <Contact />,
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement : <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);