import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log({ "data:": data, "status:": status });

  return (
    <div className="w-full flex items-center justify-center py-14">
      <div className="flex flex-col items-center justify-center gap-6 shadow-2xl py-10 px-5 rounded-xl w-full md:w-[500px]">
        <button
          type="button"
          onClick={() => signIn()}
          className="w-fit bg-white text-darkBg py-4 px-10 rounded-lg font-medium text-lg md:text-xl"
        >
          Sign in with Google
        </button>
        <button className="w-fit bg-darkBg text-white py-4 px-10 rounded-lg font-medium text-lg md:text-xl">
          Sign in with Github
        </button>
        <button className="w-fit bg-[#087bea] text-white py-4 px-6 md:px-10 rounded-lg font-medium text-lg md:text-xl">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
