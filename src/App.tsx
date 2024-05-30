import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import SignUpPage from "./components/SignUpPage";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute"; // Assuming you have a PrivateRoute component

// AuthContext.js - Assume this file contains the authentication context setup

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <Toaster />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignUpPage />} />
        {/* <PrivateRoute path="/browse" element={<BrowsePage />} /> Protected route */}
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
