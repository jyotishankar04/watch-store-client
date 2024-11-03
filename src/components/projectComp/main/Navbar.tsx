import Link from "next/link";
import React from "react";
import NavProfile from "./NavProfile";
import { auth } from "@/auth";
interface PropTypes {
  children?: React.ReactNode;
  title: string;
  href: string;
  className?: string;
}

const Navbar = async () => {
  return (
    <div className="w-full flex sticky top-0 z-50 justify-between items-center text-white bg-black p-3 ">
      <div>
        <div className="dropdown dropdown-bottom dropdown-right">
          <div tabIndex={0} role="button" className="uppercase px-4">
            Collections &#x2192;
          </div>
          <div
            tabIndex={0}
            className="dropdown-content flex flex-col rounded-md gap-2 bg-white card card-compact text-black z-[1] w-96 p-2 shadow"
          >
            <div>
              <Link href={"/collections"} className="group">
                <h1 className="text-3xl font-semibold uppercase  hover:text-heroOrange">
                  Collections
                  <span className="ml-2 text-3xl font-normal hover:translate-x-5">
                    &#x2192;
                  </span>
                </h1>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 uppercase">
              <CollectionButtons href="/collections/coutura" title="coutura" />
              <CollectionButtons
                href="/collections/diamonds"
                title="diamonds"
              />
              <CollectionButtons
                href="/collections/essentials"
                title="essentials"
              />

              <CollectionButtons href="/collections/prospex" title="prospex" />

              <CollectionButtons href="/collections/presage" title="presage" />

              <CollectionButtons href="/collections/recraft" title="recraft" />

              <CollectionButtons href="/collections/sports" title="sports" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-semibold uppercase ">Seiko</h1>
      <div className="z-50">
        <NavProfile />
      </div>
    </div>
  );
};

const CollectionButtons = ({ href, title, className, children }: PropTypes) => {
  return (
    <Link
      href={href}
      className={`p-2 hover:text-white hover:bg-black rounded-md` + className}
    >
      {children || title}
    </Link>
  );
};

export default Navbar;
