import React, { useState } from "react";

function Loginpopup() {
  const [currState, setCurrState] = useState("login");



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg p-8 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{currState}</h2>
        <form className="space-y-4 w-80">
          {currState == "login" ? (
            <></>
          ) : (
            <div>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded placeholder:text-xs"
                placeholder="your email"
              />
            </div>
          )}

          <div>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded placeholder:text-xs"
              placeholder="email "
            />
          </div>
          <div>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded placeholder:text-xs"
              placeholder="your password "
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
          >
            Login
          </button>
          <div className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-xs text-gray-600">
              By continuing I agree to the terms of use & privacy policy
            </span>
          </div>
        </form>
        <div className="mt-4 text-center text-xs text-gray-600">
          {currState === "login" ? (
            <p>
              Create a new account?{" "}
              <a
                href="#"
                onClick={() => setCurrState("signin")}
                className="text-blue-500 hover:underline"
              >
                Click here
              </a>
            </p>
          ) : (
            <p>
              {" "}
              alredy have an accoun?{" "}
              <a
                href="#"
                onClick={() => setCurrState("login")}
                className="text-blue-500 hover:underline"
              >
                Click here
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginpopup;
