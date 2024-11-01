import CollectionCard from "@/components/projectComp/main/CollectionCard";

const page = () => {
  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-bold uppercase pl-8">Collections</h1>
      <div className="mt-4 grid-cols-5 grid gap-4">
        <CollectionCard
          title="coutura"
          href="/collections/coutura"
          img="https://res.cloudinary.com/djby1yfko/image/upload/v1725814229/1724436300_epoa7k.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt."
        />
        <CollectionCard
          title="diamonds"
          href="/collections/diamonds"
          img="https://res.cloudinary.com/djby1yfko/image/upload/v1725814229/1724436300_epoa7k.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt."
        />
        <CollectionCard
          title="essentials"
          href="/collections/essentials"
          img="https://res.cloudinary.com/djby1yfko/image/upload/v1725814229/1724436300_epoa7k.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt."
        />
        <CollectionCard
          title="prospex"
          href="/collections/prospex"
          img="https://res.cloudinary.com/djby1yfko/image/upload/v1725814229/1724436300_epoa7k.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt."
        />
        <CollectionCard
          title="presage"
          href="/collections/presage"
          img="https://res.cloudinary.com/djby1yfko/image/upload/v1725814229/1724436300_epoa7k.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt."
        />
        <CollectionCard
          title="recraft"
          href="/collections/recraft"
          img="https://res.cloudinary.com/djby1yfko/image/upload/v1725814229/1724436300_epoa7k.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt."
        />
        <CollectionCard
          title="sports"
          href="/collections/sports"
          img="https://res.cloudinary.com/djby1yfko/image/upload/v1725814229/1724436300_epoa7k.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt."
        />
      </div>
    </div>
  );
};

export default page;
