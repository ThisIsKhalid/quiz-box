import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../components/ErrorElement";
import Home from "../components/Home";
import Root from "../components/Root";
import Topics from "../components/Topics";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'topics',
                element: <Topics></Topics>
            },
        ]
    }
])


export default router;