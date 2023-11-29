import "server-only";

import { RecipeSummary, SearchFilters } from "@/interface";
import { DEFAULT_SEARCH } from "@/constants";

const getQuantity = (quantity: any) => {
  if (typeof quantity === "number") {
    return quantity.toFixed(1);
  }

  return "-";
};

export const getRecipes = async (filters: SearchFilters) => {
  try {
    if (!process.env.APP_ID || !process.env.APP_KEY)
      throw new Error("APP_ID or APP_KEY not found");

    const {
      q = DEFAULT_SEARCH,
      to = 10,
      from = 0,
      cuisineType = "",
      diet = "",
      dishType = "",
      health = "",
      mealType = "",
    } = filters;
    const searchParams = new URLSearchParams();

    searchParams.set("q", q);
    searchParams.set("to", to.toString());
    searchParams.set("from", from.toString());
    searchParams.set("imageSize", "LARGE");
    searchParams.set("app_id", process.env.APP_ID);
    searchParams.set("app_key", process.env.APP_KEY);
    if (cuisineType) searchParams.set("cuisineType", cuisineType);
    if (diet) searchParams.set("diet", diet);
    if (dishType) searchParams.set("dishType", dishType);
    if (health) searchParams.set("health", health);
    if (mealType) searchParams.set("mealType", mealType);

    const response = await fetch(
      `https://api.edamam.com/search?${searchParams.toString()}`
    );

    if (!response.ok) {
      console.log(response);
      console.log(filters);
      throw new Error("Error fetching recipes");
    }

    const result = await response.json();

    if (!result || !Array.isArray(result.hits)) {
      console.log(result);
      console.log(filters);
      throw new Error("Error fetching recipes");
    }

    const recipes = (result.hits as any[]).map<RecipeSummary>((item: any) => ({
      calories: item.recipe.calories,
      cautions: item.recipe.cautions,
      cuisineType: item.recipe.cuisineType,
      dietLabels: item.recipe.dietLabels,
      dishType: item.recipe.dishType,
      healthLabels: item.recipe.healthLabels,
      image: item.recipe.image,
      ingredients: [
        ...item.recipe.ingredients.map((ingredient: any) => ({
          food: ingredient?.food,
          weight: ingredient?.weight,
        })),
      ],
      label: item.recipe.label,
      mealType: item.recipe.mealType,
      source: item.recipe.source,
      totalTime: item.recipe.totalTime,
      url: item.recipe.url,
      yield: item.recipe.yield,
      uri: item.recipe.uri,
      nutrition: {
        protein: getQuantity(item.recipe.totalNutrients?.PROCNT?.quantity),
        fat: getQuantity(item.recipe.totalNutrients?.FAT?.quantity),
        carbs: getQuantity(item.recipe.totalNutrients?.CHOCDF?.quantity),
        fiber: getQuantity(item.recipe.totalNutrients?.FIBTG?.quantity),
      },
    }));

    return {
      recipes,
      more: result.more,
      from: result.from,
      to: result.to,
      count: result.count,
    };
  } catch (error: any) {
    console.log(error);
    return { recipes: [], more: false, from: 0, to: 0, count: 0 };
  }
};
