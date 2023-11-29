import Hero from "@/components/hero";
import { getRecipes } from "@/utils/get-recipes";
import RecipeCard from "@/components/recipe-card";
import Search from "@/components/search";
import PaginationButton from "@/components/pagination-button";

export default async function Home({ searchParams }: any) {
  const { recipes, more, from, to, count } = await getRecipes({
    ...searchParams,
  });

  const isRecipesLoaded =
    recipes && Array.isArray(recipes) && recipes.length > 0;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 sm:px-16 px-4 py-4 max-w-8xl mx-auto" id="search">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-semibold text-slate-900">
            Search recipes
          </h1>
          <p className="text-base text-slate-500 font-light mt-2">
            Search for recipes by name and filter by diet, health, cuisine and
            more!
          </p>
        </div>
        <Search />

        {!isRecipesLoaded && (
          <div className="flex justify-center items-center w-full h-[300px]">
            <p className="text-base text-slate-500 font-light mt-2">
              No recipes found. Try another search.
            </p>
          </div>
        )}
        {isRecipesLoaded && (
          <>
            <PaginationButton from={from} to={to} more={more} count={count} />

            <div className="grid min-[1850px]:grid-cols-4  min-[1340px]:grid-cols-3 min-[950px]:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} fullRecipe={recipe} />
              ))}
            </div>

            <PaginationButton from={from} to={to} more={more} count={count} />

            <div className="flex justify-between items-center w-full">
              <p className="text-base text-slate-500 font-light mt-4 p-1">
                Powered by{" "}
                <a
                  href="https://developer.edamam.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Edamam
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
