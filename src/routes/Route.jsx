import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
            path:"/",
            index:true,
            element:<Home/>
        }
    ]
  },
  {
    path:"*",
    element:<ErrorPage/>
  }
]);
