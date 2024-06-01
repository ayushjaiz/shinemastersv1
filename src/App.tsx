import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import SignUpPage from "./components/SignUpPage";
import { Toaster } from "react-hot-toast";
//
import UserContext from "./context/UserContext";

type User = {
  name: string;
  email: string;
};

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
  const [user, setUser] = useState<User | null>(null);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SignUpPage />} />
          {/* <PrivateRoute path="/browse" element={<BrowsePage />} /> Protected route */}
        </Routes>
        
      </UserContext.Provider>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
