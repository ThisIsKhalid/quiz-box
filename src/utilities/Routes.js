import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../components/ErrorElement";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import Topics from "../components/Topics";
import getQuizTopicsDAta from "./loader";


const router = createBrowserRouter([
    {
        path: '/',
        loader: getQuizTopicsDAta,
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
                path: 'quiz',
                element: <Topics></Topics>
            },
            {
                path: 'quiz/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Quiz></Quiz>
            },
        ]
    }
])


export default router;