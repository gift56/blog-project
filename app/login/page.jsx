import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full flex items-center justify-center py-14">
      <div className="flex flex-col items-center justify-center gap-6 shadow-2xl py-10 px-5 rounded-xl w-full md:w-[500px]">
        <button>Sign in with Google</button>
        <button>Sign in with Github</button>
        <button>Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default LoginPage;
