import axios from "axios";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleButtonClick = async () => {
    console.log("Request sent");
    const formData = {
      username: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
      password_confirmation: password.current!.value,
    };

    const promise = axios
      .post("http://localhost:4000/auth/signup", formData)
      .then((response) => {
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });

    toast.promise(promise, {
      loading: "Submitting...",
      success: "Successfully registered!",
      error: "Error registering!",
    });
  };

  return (
    <div className="flex h-screen">
      <div className="bg-star w-1/2 h-full"></div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="border bg-transparent rounded-lg w-1/2 flex flex-col gap-6 p-6">
          <div className="flex flex-col justify-center h-16">
            <h3 className="text-2xl font-semibold tracking-tight">
              Create an Account
            </h3>
            <p className="text-sm text-slate-400">
              Enter you credentials to create an account
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="JohnDoe"
                type="text"
                ref={name}
              />
            </div>

            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="m@example.com"
                type="email"
                ref={email}
              />
            </div>

            <div className="grid gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="password"
                placeholder="m@example.com"
                type="password"
                ref={password}
              />
            </div>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md
                    text-sm font-medium transition-colors 
                    focus-visible:outline-none 
                    focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none d
                    isabled:opacity-5 h-9 px-4 py-2 w-full bg-black text-white"
            onClick={handleButtonClick}
          >
            Create account
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
