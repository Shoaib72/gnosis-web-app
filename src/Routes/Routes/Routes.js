import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CheckOut from "../../Components/CheckOut/CheckOut";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main";
import Home from './../../Components/Home/Home';
import ErrorPage from "../../Components/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://gnosis-web-app-server.vercel.app/courses')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://gnosis-web-app-server.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://gnosis-web-app-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://gnosis-web-app-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`https://gnosis-web-app-server.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])