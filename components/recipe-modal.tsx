"use client";

import { RecipeSummary } from "@/interface";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ServingDisplay from "./servings-display";
import ChipGroup from "./chip-group";
import DietIcon from "./icons/diet";
import AllergyIcon from "./icons/allergy";
import HealthIcon from "./icons/health";
import CuisineIcon from "./icons/cuisine";
import DishIcon from "./icons/dish";
import MacroDisplay from "./macro-display";
import Link from "next/link";
import ClockIcon from "./icons/clock";
import CloseIcon from "./icons/close";

type Props = {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  recipe: RecipeSummary;
};

const RecipeModal = ({ isOpen, setIsOpen, recipe }: Props) => {
  const {
    label,
    calories,
    cautions,
    cuisineType,
    dietLabels,
    dishType,
    healthLabels,
    yield: servings,
    mealType,
    totalTime,
    ingredients,
    source,
    url,
  } = recipe;
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-xl max-h-[85vh] transform rounded-2xl bg-white py-6 text-left shadow-xl transition-all flex flex-col gap-1">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-[5px] border border-black rounded-full"
                    onClick={closeModal}
                  >
                    <CloseIcon className="w-5 h-5" />
                  </button>

                  <div className="flex-1 flex-col overflow-y-auto px-4 flex gap-4 scrollbar">
                    <div className="flex min-[600px]:gap-8 gap-4  min-[600px]:flex-row pt-2 px-6 flex-col">
                      <div
                        className="relative min-[600px]:h-72 h-40 min-[600px]:max-w-[30%] min-[600px]:min-w-fit w-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${recipe.image})`,
                        }}
                      />
                      <div className="flex flex-col gap-3">
                        <h1 className="font-semibold text-3xl capitalize">
                          {label}
                        </h1>
                        <ChipGroup
                          label={<CuisineIcon />}
                          values={cuisineType}
                          backgroundColor="bg-indigo-100"
                          textColor="text-indigo-500"
                        />
                        <ChipGroup
                          label={<DishIcon className="w-7 h-7" />}
                          values={[...dishType, ...mealType]}
                          backgroundColor="bg-sky-100"
                          textColor="text-sky-500"
                        />

                        <ChipGroup
                          label={
                            <span className="flex items-center border p-1 rounded-full border-black">
                              <DietIcon className="w-4 h-4 " />
                            </span>
                          }
                          values={dietLabels}
                          backgroundColor="bg-blue-100"
                          textColor="text-blue-500"
                        />
                        <ChipGroup
                          label={<AllergyIcon className="w-7 h-7" />}
                          values={cautions}
                          backgroundColor="bg-red-100"
                          textColor="text-red-500"
                        />
                        <ChipGroup
                          label={
                            <HealthIcon className="w-7 h-7 stroke-black stroke-0" />
                          }
                          values={healthLabels}
                          backgroundColor="bg-green-100"
                          textColor="text-green-500"
                        />
                        <div className="flex ml-[2px] justify-between">
                          <div className="flex gap-2">
                            <ClockIcon className="w-[26px] h-[26px]" /> :
                            <p className="font-semibold">
                              {totalTime === 0 ? <>&mdash;</> : totalTime} mins
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <span>Source: </span>
                            <Link
                              className="text-blue-500 hover:underline"
                              href={url}
                              target="_blank"
                            >
                              {source}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-4">
                      <hr />
                      <h2 className="text-xl font-semibold">Nutrition</h2>
                      <div className="flex items-center justify-center  min-[450px]:flex-row flex-col gap-2">
                        <div className="flex flex-1 min-[450px]:hidden h-12 w-full  justify-between items-center bg-slate-200 text-slate-900 rounded-lg px-5 p-2">
                          <div className="flex flex-col h-12">
                            <h5 className="">Servings </h5>
                            <ServingDisplay servings={servings} />
                          </div>
                          <div className="h-8 w-[1px] bg-slate-800" />
                          <div className="flex flex-col text-center h-12">
                            <h5 className="">Calories</h5>
                            <p className="font-semibold">
                              {calories.toFixed(0)}
                            </p>
                          </div>
                        </div>
                        <div className="flex min-[450px]:w-full min-[450px]:justify-around justify-center gap-3">
                          <MacroDisplay
                            quantity={servings}
                            label="Servings"
                            className="min-[450px]:inline-flex hidden"
                          />
                          <MacroDisplay
                            quantity={calories.toFixed(0)}
                            label="Calories"
                            className="min-[600px]:inline-flex hidden"
                          />
                          <MacroDisplay
                            quantity={`${recipe.nutrition.protein}g`}
                            label="Protein"
                          />
                          <MacroDisplay
                            quantity={`${recipe.nutrition.fat}g`}
                            label="Fat"
                          />
                          <MacroDisplay
                            quantity={`${recipe.nutrition.carbs}g`}
                            label="Carbs"
                          />
                          <MacroDisplay
                            quantity={`${recipe.nutrition.fiber}g`}
                            label="Fiber"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 px-4">
                      <h2 className="text-xl font-semibold">Ingredients</h2>
                      <div className="flex flex-col gap-2">
                        {ingredients.map((ingredient, index) => (
                          <div
                            className="flex justify-between gap-2"
                            key={index}
                          >
                            <span className=" ">
                              {`${ingredient.food
                                .charAt(0)
                                .toUpperCase()}${ingredient.food.slice(1)}`}
                            </span>
                            <div className="border-b-2 border-slate-700 border-dotted mb-2 flex-1" />
                            <span className="text-sm text-gray-800">
                              {ingredient.weight.toFixed(0)}g
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="min-h-fit flex justify-center items-center"
                      id="edamam-badge"
                      data-color="white"
                    ></div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RecipeModal;
