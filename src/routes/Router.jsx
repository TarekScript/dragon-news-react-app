import { createBrowserRouter } from "react-router";
import CategoryNews from "../components/pages/CategoryNews";
import Home from "../components/pages/Home";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: "/",
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
    }
])
export default router;