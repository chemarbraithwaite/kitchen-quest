import Link from "next/link";
import { Button } from ".";
import RecipeCard from "./recipe-card";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 h-screen relative overflow-hidden bg-cover bg-hero-bg bg-no-repeat z-0 max-w-8xl mx-auto">
      <div className="flex-1 pt-36 text-end sm:text-center sm:px-16 px-6 bg-white bg-opacity-10">
        <h1 className="2xl:text-7xl sm:text-6xl text-5xl font-extrabold text-black">
          Embark on a Culinary <br /> Adventure.
        </h1>
        <p className="text-base text-slate-900 font-semibold mt-5">
          Browser through over 10,000 recipes
          <span className="hidden md:inline"> from around the world</span>.
        </p>
      </div>
      <RecipeCard
        description={
          <>
            {" "}
            <p className="text-sm my-2 sm:my-7 min-[500px]:inline hidden">
              The era of dull salads is behind us. Salads now offer vibrant and
              nutrient-packed options for enjoying a variety of colorful foods.
            </p>
            <p className="text-sm my-2 flex sm:my-7 min-[500px]:hidden">
              The era of dull salads is behind us. Salads now offer vibrant and
              nutrient-packed options.
            </p>
          </>
        }
        recipe={{
          label: "Salad Recipes",
          yield: 2,
          totalTime: 60,
          calories: 400,
          image: "/images/salad.webp",
        }}
        xOverflow
      />

      <div className="flex justify-left ml-[5vw] items-end mb-[15vh] h-11 relative w-full">
        <Link href="#search" className="no-tap-highlight">
          <Button
            title="Browse More Recipes"
            className="bg-slate-800 text-white h-11 text-1xl"
          />
        </Link>
      </div>
      <a
        className="font-thin text-sm"
        href="https://www.vecteezy.com/free-photos"
        target="_blank"
      >
        Free Stock photos by Vecteezy
      </a>
    </div>
  );
};

export default Hero;
