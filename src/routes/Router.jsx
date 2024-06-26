import { createBrowserRouter } from "react-router-dom"
import Root from './Root'
import ErrorPage from './ErrorPage'
import Home from "../pages/home";
import Game from "../pages/game";
import Final from "../pages/final";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "final/:score",
        element: <Final />,
      }
    ]
  }
]);


export default router