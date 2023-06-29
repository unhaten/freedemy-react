import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Traveling from "./traveling/Traveling";
// import Airbnb from "./airbnb/Airbnb";
import "./global.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <>sad</>,
    },
    {
        path: "/traveling",
        element: <Traveling></Traveling>,
    },

    // {
    //     path: "/airbnb",
    //     element: <Airbnb></Airbnb>,
    // },
    {
        path: "*",
        element: <div>no such link</div>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
