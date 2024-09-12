import CollectionBanner from "@/components/projectComp/main/CollectionBanner";
import ProductCard from "@/components/projectComp/main/ProductCard";
import { products } from "@/lib/dummyDb";
import React from "react";

const page = ({ params }: { params: { collection: string } }) => {
  return (
    <div className="text-black bg-gray-200 w-full h-full">
      <CollectionBanner
        title={params.collection}
        image="https://res.cloudinary.com/djby1yfko/image/upload/v1725793604/2ac1f26e2a19f3a1941da9fdcbab24da_i6bjed.jpg"
      />

      <div>
        <h1 className="text-4xl font-bold uppercase p-8">
          {params.collection}
        </h1>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 p-4">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

//https:res.cloudinary.com/djby1yfko/image/upload/v1725875529/SUR589_1_400x600_icqcel.png
export default page;
