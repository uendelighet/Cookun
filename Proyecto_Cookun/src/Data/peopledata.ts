interface Recipe {
    title: string;
    ingredients: string[];
    instructions: string;
    likes: number;
  }
  
  interface User {
    email: string;
    password: string;
    username: string;
    publishedRecipes: Recipe[];
    favorites: Recipe[];
    collections: Recipe[][];
  }
  
  const users: User[] = [
    {
      email: "user1@example.com",
      password: "password123",
      username: "chefMaster01",
      publishedRecipes: [
        {
          title: "Spaghetti Bolognese",
          ingredients: ["spaghetti", "ground beef", "tomato sauce", "onions"],
          instructions: "Cook spaghetti. Brown the beef. Mix with sauce.",
          likes: 45,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user2@example.com",
      password: "securePass456",
      username: "bakeQueen",
      publishedRecipes: [
        {
          title: "Chocolate Cake",
          ingredients: ["flour", "sugar", "cocoa", "eggs"],
          instructions: "Mix ingredients and bake at 180°C for 45 minutes.",
          likes: 78,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user3@example.com",
      password: "myPass789",
      username: "grillKing",
      publishedRecipes: [
        {
          title: "BBQ Ribs",
          ingredients: ["ribs", "BBQ sauce", "spices"],
          instructions: "Grill ribs and brush with sauce.",
          likes: 52,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user4@example.com",
      password: "chef1234",
      username: "pastaLover",
      publishedRecipes: [
        {
          title: "Pesto Pasta",
          ingredients: ["pasta", "basil", "garlic", "parmesan"],
          instructions: "Blend ingredients for pesto and mix with pasta.",
          likes: 33,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user5@example.com",
      password: "safetyFirst555",
      username: "dessertKing",
      publishedRecipes: [
        {
          title: "Apple Pie",
          ingredients: ["apples", "flour", "butter", "sugar"],
          instructions: "Prepare dough, fill with apples, and bake.",
          likes: 60,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user6@example.com",
      password: "password321",
      username: "saladGuru",
      publishedRecipes: [
        {
          title: "Greek Salad",
          ingredients: ["cucumbers", "tomatoes", "feta cheese", "olives"],
          instructions: "Chop ingredients and toss with dressing.",
          likes: 29,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user7@example.com",
      password: "letMeCook999",
      username: "veggieMaster",
      publishedRecipes: [
        {
          title: "Vegan Tacos",
          ingredients: ["tortillas", "black beans", "avocado", "salsa"],
          instructions: "Fill tortillas with beans, avocado, and salsa.",
          likes: 67,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user8@example.com",
      password: "recipeMagic888",
      username: "seafoodLover",
      publishedRecipes: [
        {
          title: "Grilled Salmon",
          ingredients: ["salmon", "lemon", "herbs"],
          instructions: "Grill salmon and season with lemon and herbs.",
          likes: 54,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user9@example.com",
      password: "tastyCook456",
      username: "comfortFoodie",
      publishedRecipes: [
        {
          title: "Mac and Cheese",
          ingredients: ["macaroni", "cheese", "milk", "butter"],
          instructions: "Cook macaroni and mix with cheese sauce.",
          likes: 40,
        },
      ],
      favorites: [],
      collections: [],
    },
    {
      email: "user10@example.com",
      password: "chefPower789",
      username: "soupsMaster",
      publishedRecipes: [
        {
          title: "Chicken Soup",
          ingredients: ["chicken", "carrots", "onions", "celery"],
          instructions: "Simmer chicken with vegetables until cooked.",
          likes: 73,
        },
      ],
      favorites: [],
      collections: [],
    },
  ];
  
  export { users };
  