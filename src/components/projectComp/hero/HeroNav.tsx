import Link from "next/link";

const HeroNav = () => {
  return (
    <div className="p-4 px-20 text-white flex justify-between items-center">
      <div className="text-4xl text-white">
        <h1 className="font-bold">Seiko</h1>
      </div>
      <div className="flex uppercase text-xl items-center text-white gap-20">
        <div className="text-white flex items-center gap-16">
          <Link href={"/"} className="hover:text-heroOrange">
            Home
          </Link>
          <Link href={"/"} className="hover:text-heroOrange">
            About
          </Link>
          <Link href={"/"} className="hover:text-heroOrange">
            Contact
          </Link>
        </div>

        <Link href={"/collections"}>
          <button className="py-2 px-4 border-white border-2   hover:translate-x-3 hover:scale-x-110 duration-300 hover:border-heroOrange uppercase hover:text-heroOrange">
            Shop Now &#x2192;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroNav;
