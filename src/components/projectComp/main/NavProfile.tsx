"use client";

import { ShoppingCart } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const NavProfile = () => {
  const session = useSession();
  return (
    <div className="flex items-center z-50 justify-end gap-8 pr-10">
      {session.status === "loading" || session.status === "unauthenticated" ? (
        <div>
          <Link
            href="/api/auth/signin"
            className="py-2 px-4 border-white border-2  text-sm hover:translate-x-3 hover:scale-x-110 duration-300 hover:border-heroOrange uppercase hover:text-heroOrange"
          >
            Login
          </Link>
        </div>
      ) : (
        <>
          <Link href="/cart">
            <ShoppingCart />
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="profile image"
                  src={session.data?.user?.image || ""}
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div
              tabIndex={0}
              className="menu rounded-none menu-sm dropdown-content bg-white  z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className=" flex flex-col gap-2">
                <Link href="/profile">
                  <h1 className="text-lg hover:bg-black hover:text-white p-2 font-semibold uppercase text-black">
                    Profile
                  </h1>
                </Link>
                <Link href="/orders">
                  <h1 className="text-lg hover:bg-black hover:text-white p-2 font-semibold uppercase text-black">
                    Orders
                  </h1>
                </Link>
                <div
                  onClick={() => {
                    signOut().then(() => {
                      window.location.href = "/";
                    });
                  }}
                >
                  <h1 className="text-lg hover:bg-error hover:text-white p-2 font-semibold uppercase text-red-700">
                    Logout
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavProfile;
