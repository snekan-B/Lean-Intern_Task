import styles from "./css/background.module.css";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Success from "./components/Success";
import Background from "./components/Background";
import Default from "./components/Default";
import Secondary from "./components/Secondary";
import Question from "./components/Question";

const router = createBrowserRouter([
  {
    //router path for default home page
    path: "/",
    element: <Default />,
  },
  {
    //router path for page with minutes and seconds
    path: "/main",
    element: <Main />,
  },
  {
    //router path for page with hours,minutes and seconds
    path: "/secondary",
    element: <Secondary />,
  },
  {
    //router path for the page with success message
    path: "/success",
    element: <Success />,
  },
  {
    // router path for the final page
    path: "/question",
    element: <Question />,
  },
]);

function App() {
  return (
    <div>
      <div className={styles}>
        <Background />
        <RouterProvider router={router}></RouterProvider>;
      </div>
    </div>
  );
}

export default App;
