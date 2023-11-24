"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="text-lg font-medium text-darkBg">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="w-full flex items-center justify-center py-14">
      <div className="flex flex-col items-center justify-center gap-6 shadow-2xl py-10 px-5 rounded-xl w-full md:w-[500px]">
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-fit bg-white text-darkBg py-4 px-10 rounded-lg font-medium text-lg md:text-xl hover:opacity-80 transition-all duration-300"
        >
          Sign in with Google
        </button>
        <button className="w-fit bg-darkBg text-white dark:bg-white dark:text-darkBg py-4 px-10 rounded-lg font-medium text-lg md:text-xl hover:opacity-80 transition-all duration-300">
          Sign in with Github
        </button>
        <button className="w-fit bg-[#087bea] text-white py-4 px-6 rounded-lg font-medium text-lg md:text-xl hover:opacity-80 transition-all duration-300">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
