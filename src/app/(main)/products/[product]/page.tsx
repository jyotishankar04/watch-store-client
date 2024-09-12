import FeatureCard from "@/components/projectComp/main/FeatureCard";
import ImageViewer from "@/components/projectComp/main/ImageViewer";
import { ProductRightCard } from "@/components/projectComp/main/ProductDetailsCard";
import { products } from "@/lib/dummyDb";
import Image from "next/image";

const page = ({ params }: { params: { product: string } }) => {
  const product = products[parseInt(params.product) - 1];
  return (
    <div className="w-full h-full ">
      <div className="w-full grid grid-cols-2 mb-10 h-auto">
        <div className="w-full h-full">
          <ImageViewer images={product.image} />
        </div>
        <div className="w-full h-full">
          <ProductRightCard product={product} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-around bg-gray-100 ">
        <div className="container m-auto py-10  grid items-center grid-cols-3">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="text-2xl uppercase font-bold">
              {product.collection}
            </h3>
            <h4 className="text-xl opacity-60">{product.model}</h4>
            <p className="text-md leading-6 opacity-80 text-gray-700">
              {product.description}
            </p>
          </div>
          <div className="w-full flex justify-center items-center p-10">
            <Image
              alt="image"
              className="w-60 object-contain object-center"
              src={product.image[0]}
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </div>

      <div className="w-full py-10 bg-gray-100 flex justify-center items-center">
        <FeatureCard
          features={product.features}
          technicalData={product.technicalData}
        />
      </div>
    </div>
  );
};

export default page;
