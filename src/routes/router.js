import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Statistics from "../components/Statistics";
import TopicDetails from "../components/TopicDetails";
import Topics from "../components/Topics";
import Main from "../layouts/Main";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/topics',
                element: < Topics />
            },
            {
                path: 'topics/quiz/:id',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: < TopicDetails />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    },
])