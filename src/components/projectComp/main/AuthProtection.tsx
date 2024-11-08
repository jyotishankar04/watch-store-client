"use client";

import Loading from "@/components/Loading";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { authenticate } from "@/lib/axiosConfig";

const AuthProtection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const session = useSession();
  const queryClient = useQueryClient();
  const { data: user, refetch } = useQuery({
    queryKey: ["session"],
    queryFn: authenticate,

    onSuccess: (data) => {
      queryClient.setQueryData(["session"], data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (session.status === "loading")
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loading />
      </div>
    );

  if (session.status === "unauthenticated") {
    refetch();
    return (
      <div className="w-full h-full flex gap-4 justify-center flex-col items-center text-xl ">
        <h1 className="text-3xl font-bold">Unauthorized</h1>
        <p> You need to be logged in to view this page</p>
        <div className="flex flex-row gap-4 justify-center w-full">
          <Link
            href="/auth/login"
            className="py-2 px-4 border-2 hover:bg-white hover:text-black border-black flex flex-row items-center gap-4 rounded-sm bg-black text-white duration-300"
          >
            <button>Login</button>
          </Link>
          <Link
            href="/"
            className="py-2 px-4 border-2 hover:bg-white hover:text-black border-black flex flex-row items-center gap-4 rounded-sm bg-black text-white duration-300"
          >
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    );
  }

  if (session.status === "authenticated") {
    return <>{children}</>;
  }
  return <div>Error</div>;
};

export default AuthProtection;
