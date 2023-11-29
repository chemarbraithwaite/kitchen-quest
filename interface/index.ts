import { diet, health, mealType, dishType, cuisineType } from "@/constants";

export interface Ingredient {
  food: string;
  weight: number;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: { [x: string]: Ingredient }[];
  calories: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
}

export interface RecipeSummary {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredients: Ingredient[];
  calories: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  nutrition: {
    protein: string;
    fat: string;
    carbs: string;
    fiber: string;
  };
}

type Diet = (typeof diet)[number];
type Health = (typeof health)[number];
type MealType = (typeof mealType)[number];
type DishType = (typeof dishType)[number];
type CuisineType = (typeof cuisineType)[number];

export interface SearchFilters {
  diet: Diet;
  health: Health;
  mealType: MealType;
  dishType: DishType;
  cuisineType: CuisineType;
  calories: {
    min: number;
    max: number;
  };
  excluded: string[];
  ingr: number;
  q: string;
  to: number;
  from: number;
}
