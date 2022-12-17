import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../component/Home"
import ErrorPage from "../component/ErrorPage.jsx"
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
            
        ]
    }
])