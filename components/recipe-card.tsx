"use client";

import { RecipeSummary } from "@/interface";
import { ReactNode, useState } from "react";
import RecipeModal from "./recipe-modal";
import ServingDisplay from "./servings-display";
import ChipGroup from "./chip-group";

interface Props {
  recipe?: Pick<
    RecipeSummary,
    "label" | "calories" | "image" | "yield" | "totalTime"
  >;
  fullRecipe?: RecipeSummary;
  description?: ReactNode;
  xOverflow?: boolean;
}

const RecipeCard = ({ description, xOverflow, ...props }: Props) => {
  const {
    label,
    image,
    yield: servings = 0,
    totalTime,
    calories = 0,
    dietLabels = [],
  } = { ...props.recipe, ...props.fullRecipe };
  const variant = description ? "large" : "small";

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div
      className={`h-full w-full flex items-center flex-2 group ${
        xOverflow ? " -ml-4 mr-5" : ""
      }
      ${variant === "small" ? " max-w-[400px] max-h-[150px]" : "max-w-xl"}
      `}
    >
      <div
        className={`relative flex bg-white shadow-lg w-full rounded-3xl  h-min overflow-hidden items-center
      
     `}
      >
        <div
          className={`flex h-full w-full bg-cover ${
            variant === "large"
              ? "min-h-[220px] max-w-[35%]"
              : "min-h-[150px] max-w-[25%]"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div
          className={`flex w-full h-min ${
            variant === "small" ? "max-w-[75%]" : "max-w-[65%]"
          } `}
        >
          <div className="px-6 py-2 justify-between flex flex-col w-full h-full">
            <h2
              className={`text-2xl sm:text-3xl font-semibold text-slate-900
           ${
             variant === "small"
               ? "overflow-ellipsis overflow-hidden whitespace-nowrap"
               : ""
           }
            `}
            >
              {label}
            </h2>

            {description}
            {!description && (
              <div className="flex flex-col my-3 flex-wrap gap-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <ChipGroup
                    label={<h5 className="text-sm font-bold">Diet:</h5>}
                    values={dietLabels}
                    backgroundColor="bg-blue-100"
                    textColor="text-blue-500"
                  />
                </div>
              </div>
            )}
            <div className="flex w-full justify-between items-end">
              <div className="flex flex-1 h-12 justify-between max-w-[60%] items-center">
                <div className="flex flex-col h-full">
                  <h5 className="min-[400px]:inline  hidden">Serving</h5>
                  <h5 className="min-[400px]:hidden">Serv.</h5>
                  <ServingDisplay servings={servings} />
                </div>
                <div className="h-8 w-[1px] bg-slate-800" />
                <div className="flex flex-col h-12">
                  <h5 className="min-[450px]:inline  hidden">Cook Time</h5>
                  <h5 className="min-[450px]:hidden">Prep.</h5>
                  <p className="font-semibold">
                    {totalTime === 0 ? <>&mdash;</> : totalTime} mins
                  </p>
                </div>
              </div>
              <p>
                {calories.toFixed(0)} <span className="text-xs">Cal</span>
                <span className="min-[450px]:inline hidden text-xs">ories</span>
              </p>
            </div>
          </div>
        </div>
        {props.fullRecipe && (
          <div className="absolute hidden justify-start items-center h-full group-hover:flex bottom-0 w-full z-10 ">
            <div
              className="w-1/4 h-full cursor-pointer flex justify-center items-center text-center border-r bg-white"
              onClick={() => setIsModalOpen(true)}
            >
              <h1 className="text-primary font-bold">
                {" "}
                View <br /> Recipe
              </h1>
            </div>
          </div>
        )}
      </div>
      {props.fullRecipe && (
        <RecipeModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          recipe={props.fullRecipe}
        />
      )}
    </div>
  );
};

export default RecipeCard;
