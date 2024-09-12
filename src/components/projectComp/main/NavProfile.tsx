import {  ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavProfile = () => {
  return (
    <div className="flex items-center justify-end gap-8 pr-10">
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
              src="https://res.cloudinary.com/djby1yfko/image/upload/v1721314997/user-profile-images/dlplchlej5ts9cegrmt7.jpg"
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
            <Link href="/logout">
              <h1 className="text-lg hover:bg-black hover:text-white p-2 font-semibold uppercase text-red-700">
                Logout
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
