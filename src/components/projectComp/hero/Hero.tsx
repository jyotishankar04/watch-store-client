import Link from "next/link";
import HeroNav from "./HeroNav";

const Hero = () => {
  return (
    <div
      className="hero  min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/15921373/pexels-photo-15921373/free-photo-of-close-up-of-watch.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex flex-col w-full justify-start h-full">
        <div className=" w-full">
          <HeroNav />
        </div>
        <div className="mx-auto  container h-full grid grid-cols-2">
          <div className=" flex flex-col justify-center items-start gap-8">
            <h1 className="text-5xl font-bold uppercase text-white">
              Custom watches for <br /> any occasion
            </h1>
            <Link href={"/collections"}>
              <button className="py-4 px-8 border-white border-2  text-white  hover:translate-x-3 hover:scale-x-110 duration-300 hover:border-heroOrange uppercase hover:text-heroOrange">
                Shop Now &#x2192;
              </button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
