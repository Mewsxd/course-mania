// import logo from './logo.svg';
// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
// import Detail from "./details component/Detail";
import LayoutComponent from "./LayoutComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
      children: [
        { index: true, element: <Home /> },
        { path: ":courseId", element: <DetailsPage /> },
      ],
      // element: <DetailsPage />,
    },
    // { path: ":courseId", element: <Detail /> },
  ]);
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <DetailsPage />
    // </div>
  );
}

export default App;
