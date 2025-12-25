import { createBrowserRouter } from "react-router";
import CategoryNews from "../components/pages/CategoryNews";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        Component: HomeLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                loader: () => fetch('/news.json'),
                path: "/category/:id",
                Component: CategoryNews
            }
        ]
    },
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
])
export default router;