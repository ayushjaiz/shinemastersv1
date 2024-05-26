import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () =>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<AppLayout />);
}
