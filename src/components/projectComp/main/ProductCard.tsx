"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropTypes {
  model: string;
  id?: string;
  image: string[];
  price: number;
  isNew?: boolean;
  isCartAdded?: {
    added: boolean;
    quantity: number;
  };
}

const ProductCard: React.FC<{ product: PropTypes }> = ({
  product: { model, id, image, price, isNew },
}) => {
  const [like, setLike] = React.useState(false);
  return (
    <div className=" group">
      <div className="w-full h-full flex flex-col group-hover:bg-white duration-300 items-center p-5 justify-center cursor-pointer   ">
        <div className="relative w-full">
          {isNew && (
            <div className="absolute left-3 text-white bg-black px-2 py-1 rounded-2xl">
              New
            </div>
          )}

          <div className="flex justify-end group-hover:opacity-100 opacity-0">
            <button onClick={() => setLike(!like)}>
              {like ? (
                <Heart className="text-red-500 " fill={"red"} />
              ) : (
                <Heart />
              )}
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center duration-300 ">
          <Image
            alt={model}
            src={image[0]}
            className="w-52 h-auto object-cover object-center"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col duration-300 h-32 items-center justify-center ">
          <div className="group-hover:hidden flex flex-col items-center">
            <h1 className="text-xl font-bold uppercase">{model}</h1>
            <h1 className="text-2xl font-bold uppercase">{price}</h1>
          </div>
          <div className="hidden group-hover:block ">
            <Link href={`/products/${id}`}>
              <button className="py-2 px-4 text-2xl z-30 border-2   hover:scale-110 duration-300 border-black  hover:border-black uppercase hover:text-white hover:bg-black">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
