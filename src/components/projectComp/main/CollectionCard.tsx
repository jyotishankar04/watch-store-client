import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PropTypes {
  title: string;
  href: string;
  img: string;
  description: string;
}

const CollectionCard: React.FC<PropTypes> = ({
  title,
  href,
  img,
  description,
}) => {
  return (
    <Link href={href} className={"w-full z-0 justify-center flex-row flex"}>
      <div className="flex grow max-w-72 justify-center items-center">
        <figure className="relative   overflow-hidden rounded-lg max-w-sm transition-all duration-300 cursor-pointer filter  group">
          <Image
            className="rounded-lg  inset-1 overflow-hidden blur-none group-hover:blur-sm duration-300 group-hover:scale-105"
            src={img}
            alt="image description"
            width={500}
            height={500}
          />
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <h1 className="capitalize text-2xl duration-300 font-semibold group-hover:text-3xl">
              {title}
            </h1>
            <p className="hidden group-hover:block duration-300 group-hover:text-md">
              {description}
            </p>
          </figcaption>
        </figure>
      </div>
    </Link>
  );
};

export default CollectionCard;
