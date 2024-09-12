import RatingStar from "@/components/projectComp/main/RatingStar";
import { Heart } from "lucide-react";

interface PropTypes {
  model: string;
  id?: string;
  collection: string;
  price: number;
  isNew?: boolean;
  isCartAdded: {
    added: boolean;
    quantity: number;
  };
  isLiked: boolean;
  reviews: {
    rating: number;
    count: number;
  };
}

export const ProductRightCard: React.FC<{ product: PropTypes }> = ({
  product,
}) => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="bg-gray-100 p-8 w-8/12 ">
        <div className="flex justify-end">
          {product.isLiked ? (
            <Heart className="text-red-500 " fill={"red"} />
          ) : (
            <Heart />
          )}
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-bold uppercase">{product.collection}</h1>
          <h1 className="text-2xl font-bold opacity-65 uppercase">
            {product.model}
          </h1>
          <h1 className="text-3xl font-bold uppercase">${product.price}</h1>
          {product.isCartAdded.added ? (
            <button className="py-2 px-4 text-2xl z-30 border-2    duration-300 border-black uppercase ">
              Already added
            </button>
          ) : (
            <button className="py-2 px-4 text-2xl z-30 border-2 w-full mt-5 duration-300 border-black  hover:border-black uppercase hover:text-white hover:bg-black">
              {" "}
              Add to cart
            </button>
          )}
        </div>
        <div>
          <RatingStar reviews={product.reviews} />
        </div>

        <div className="flex justify-center">
          <button className="mt-5 border-2 px-10 py-2 hover:bg-black hover:text-white hover:scale-95 duration-300 border-black uppercase">
            {" "}
            Full Description
          </button>
        </div>
      </div>
    </div>
  );
};
