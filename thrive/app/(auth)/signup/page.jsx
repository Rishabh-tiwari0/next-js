import React from "react";

const Signup = () => {
  return (
    <div className="grid place-content-center h-[100vh]">
      <div className="flex flex-col">
        <h1>Sign UP</h1>
        <label className="flex border-gray-500 border">
          Username: <input type="text" />
        </label>
        <label className="flex border-gray-500 border">
          {" "}
          Email: <input type="email" />
        </label>{" "}
        <label className="flex border-gray-500 border">
          Password:
          <input type="password" />
        </label>
        <label className="flex border-gray-500 border">
          Confirm Password:
          <input type="password" />
        </label>
      </div>
    </div>
  );
};

export default Signup;
