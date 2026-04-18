import { atom } from "recoil";

export const recipeState = atom({
  key: "recipeState",
  default: [
    {
      id: "1",
      title: "Salad Caprese",
      image: "https://images.unsplash.com/photo-1604908176997-431ec0f08f24?w=800&h=600&fit=crop",
      time: 20,
      servings: 2,
      author: "Jennifer King",
      description: "Classic Italian salad with tomatoes and mozzarella.",
      ingredients: [
        "Tomatoes",
        "Mozzarella",
        "Basil",
        "Olive oil",
        "Salt"
      ],
      steps: [
        "Slice tomatoes",
        "Add mozzarella",
        "Arrange nicely",
        "Drizzle oil",
        "Serve"
      ],
      video: "https://www.youtube.com/embed/1-SJGQ2HLp8"
    },

    {
      id: "2",
      title: "Spaghetti Shrimp",
      image: "https://images.unsplash.com/photo-1589308078056-f4d2f5c0aef1?w=800&h=600&fit=crop",
      time: 30,
      servings: 3,
      author: "Matthew Martinez",
      description: "Spaghetti with garlic butter shrimp.",
      ingredients: ["Pasta", "Shrimp", "Garlic", "Butter"],
      steps: [
        "Cook pasta",
        "Fry shrimp",
        "Add butter",
        "Mix together"
      ],
      video: "https://www.youtube.com/embed/4aZr5hZXP_s"
    },

    {
      id: "3",
      title: "Healthy Salad",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
      time: 15,
      servings: 1,
      author: "Sarah Hill",
      description: "Fresh vegetable salad for healthy eating.",
      ingredients: ["Lettuce", "Tomato", "Cucumber"],
      steps: ["Cut", "Mix", "Serve"],
      video: "https://www.youtube.com/embed/9No-FiEInLA"
    },

    {
      id: "4",
      title: "Dessert Cake",
      image: "https://images.unsplash.com/photo-1605475128023-6bdf9b1c9a88?w=800&h=600&fit=crop",
      time: 25,
      servings: 4,
      author: "Julia Lopez",
      description: "Sweet dessert cake with cream.",
      ingredients: ["Flour", "Sugar", "Milk"],
      steps: ["Mix", "Bake", "Decorate"],
      video: "https://www.youtube.com/embed/Wz7g9j2j7yE"
    }
  ]
});