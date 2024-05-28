import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
]);


const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={appRouter} />);
