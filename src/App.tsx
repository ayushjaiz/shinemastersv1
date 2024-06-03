import React, { createContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./pages/ProtectedRoute";
import BrowsePage from "./pages/BrowsePage";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store/appStore";

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
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SignUpPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/browse" element={<BrowsePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
