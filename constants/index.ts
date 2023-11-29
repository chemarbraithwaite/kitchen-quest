export const searchSuggestions = [
  "Chicken",
  "Pork",
  "Curry",
  "Steak",
  "Fish",
  "Rice",
  "Pasta",
  "BBQ",
  "Instant pot",
  "Slow cooker",
  "Quick and easy",
];

export const diet = [
  "balanced",
  "high-protein",
  "high-fiber",
  "low-fat",
  "low-carb",
  "low-sodium",
] as const;

export const health = [
  "alcohol-free",
  "celery-free",
  "alcohol-cocktail",
  "dairy-free",
  "egg-free",
  "fish-free",
  "gluten-free",
  "keto-friendly",
  "kidney-friendly",
  "kosher",
  "low-fat-abs",
  "low-potassium",
  "Mediterranean",
  "mustard-free",
  "low-sugar",
  "lupine-free",
  "no-oil-added",
  "paleo",
  "peanut-free",
  "pescatarian",
  "pork-free",
  "red-meat-free",
  "sesame-free",
  "shellfish-free",
  "soy-free",
  "sugar-conscious",
  "sulfite-free",
  "tree-nut-free",
  "vegan",
  "vegetarian",
  "wheat-free",
] as const;

export const dishType = [
  "Alcohol-cocktail",
  "Biscuits and cookies",
  "Bread",
  "Cereals",
  "Condiments and sauces",
  "Drinks",
  "Desserts",
  "Main course",
  "Pancake",
  "Preps",
  "Preserve",
  "Salad",
  "Sandwiches",
  "Soup",
  "Starter",
  "Sweets",
] as const;

export const mealType = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Teatime",
] as const;

export const cuisineType = [
  "American",
  "Asian",
  "British",
  "Caribbean",
  "Central Europe",
  "Chinese",
  "Eastern Europe",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Kosher",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "South American",
  "South East Asian",
] as const;

const getOptions = (options: string[]) => {
  return [
    {
      label: "All",
      value: "",
    },

    ...[...options].map((i) => ({ value: i, label: i })),
  ];
};

export const filterOptions = [
  { title: "Diet", options: getOptions([...diet]) },
  { title: "Health", options: getOptions([...health]) },
  { title: "Dish Type", options: getOptions([...dishType]) },
  { title: "Meal Type", options: getOptions([...mealType]) },
  {
    title: "Cuisine Type",
    options: getOptions([...cuisineType]),
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "What we do", url: "#" },
      { title: "Featured", url: "#" },
      { title: "Partnership", url: "#" },
      { title: "Bussiness Relation", url: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "#" },
      { title: "Blog", url: "#" },
      { title: "Podcast", url: "#" },
      { title: "Invite a friend", url: "#" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "#" },
      { title: "Instagram", url: "#" },
      { title: "Twitter", url: "#" },
      { title: "Facebook", url: "#" },
    ],
  },
];

export const PAGE_SIZE = 10;
export const DEFAULT_SEARCH = "Healthy";
