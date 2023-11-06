import App from '../App';
  
import HomeCostumerPage from '../pages/costumer/HomeCostumerPage';
import CreateCostumerPage from '../pages/costumer/CreateCostumerPage';
import ShowCostumerPage from '../pages/costumer/ShowCostumerPage';

import {
    createBrowserRouter,
} from "react-router-dom";
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomeCostumerPage />,
            },
        ],
        errorElement: <NotFound />,
    },
    {
        path: "/costumer",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <HomeCostumerPage />,
            },
            {
                path: "show/:id",
                element: <ShowCostumerPage />,
            },
            {
                path: "create",
                element: <CreateCostumerPage />,
            },
        ],
    },
]);