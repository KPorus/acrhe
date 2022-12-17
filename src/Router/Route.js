import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../component/Home"
import ErrorPage from "../component/ErrorPage/ErrorPage.jsx"
import Contact from "../component/Contact/Contact";
import About from "../component/About/About"
export const route = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            
        ]
    }
])