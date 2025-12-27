import { createBrowserRouter } from "react-router";
import CategoryNews from "../components/pages/CategoryNews";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import LoadingPage from "../components/pages/LoadingPage";
import Login from "../components/pages/Login";
import NewsDetails from "../components/pages/NewsDetails";
import Register from "../components/pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayouts from "../layouts/HomeLayouts";
import PrivateRoute from "../provider/PrivateRoute";

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
                Component: CategoryNews,
                hydrateFallbackElement: <LoadingPage></LoadingPage>
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
    },
    {
        loader: () => fetch('/news.json'),
        path: '/news_details/:id',
        element: <PrivateRoute> <NewsDetails></NewsDetails> </PrivateRoute>,
        hydrateFallbackElement: <LoadingPage></LoadingPage>
    }
])
export default router;