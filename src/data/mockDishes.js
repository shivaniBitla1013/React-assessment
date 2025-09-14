// data/mockDishes.jsx
export const mockDishes = [
  // STARTERS
  {
    id: 1,
    name: "Spring Rolls",
    description: "Crispy rolls filled with vegetables.",
    image: "https://images.unsplash.com/photo-1617196039897-b7a7f3e2b9a6?w=600&h=400&fit=crop",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Carrot", quantity: "1 cup" },
      { name: "Spring Roll Sheets", quantity: "6 pcs" }
    ]
  },
  {
    id: 2,
    name: "Chicken Tikka",
    description: "Marinated chicken pieces grilled to perfection.",
    image: "https://images.unsplash.com/photo-1604908176997-8d90af5d8f54?w=600&h=400&fit=crop",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "Mixed" }
    ]
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Spiced paneer cubes grilled with veggies.",
    image: "https://images.unsplash.com/photo-1631452180519-07a7dd567c90?w=600&h=400&fit=crop",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Capsicum", quantity: "1" },
      { name: "Onion", quantity: "1" }
    ]
  },
  {
    id: 11,
    name: "Hara Bhara Kabab",
    description: "Green patties made with spinach, peas, and spices.",
    image: "https://images.unsplash.com/photo-1633945274405-609faadc1771?w=600&h=400&fit=crop",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Spinach", quantity: "1 cup" },
      { name: "Green Peas", quantity: "1/2 cup" },
      { name: "Potato", quantity: "1 medium" }
    ]
  },

  // MAIN COURSE
  {
    id: 4,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy with capsicum.",
    image: "https://images.unsplash.com/photo-1600628422012-90c50b3f0f59?w=600&h=400&fit=crop",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },
  {
    id: 5,
    name: "Chicken Biryani",
    description: "Fragrant rice with marinated chicken and spices.",
    image: "https://images.unsplash.com/photo-1600628421667-3e7037b3c12c?w=600&h=400&fit=crop",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Spices", quantity: "Mixed" }
    ]
  },
  {
    id: 6,
    name: "Veg Pulao",
    description: "Rice cooked with vegetables and mild spices.",
    image: "https://images.unsplash.com/photo-1617196039904-b9adf84d8881?w=600&h=400&fit=crop",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Carrot", quantity: "1/2 cup" },
      { name: "Beans", quantity: "1/2 cup" }
    ]
  },
  {
    id: 7,
    name: "Butter Chicken",
    description: "Tender chicken pieces in creamy tomato gravy.",
    image: "https://images.unsplash.com/photo-1604908177530-f3d522d6f5c7?w=600&h=400&fit=crop",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "400g" },
      { name: "Tomato", quantity: "2 large" },
      { name: "Butter", quantity: "50g" },
      { name: "Cream", quantity: "1/2 cup" }
    ]
  },

  // DESSERTS
  {
    id: 8,
    name: "Gulab Jamun",
    description: "Soft fried balls soaked in sugar syrup.",
    image: "https://images.unsplash.com/photo-1631452180061-9d8855a4cf1f?w=600&h=400&fit=crop",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Sugar Syrup", quantity: "2 cups" },
      { name: "Cardamom", quantity: "2 pods" }
    ]
  },
  {
    id: 9,
    name: "Rasgulla",
    description: "Spongy cheese balls in light sugar syrup.",
    image: "https://images.unsplash.com/photo-1617196039745-4cf82d9b7d8d?w=600&h=400&fit=crop",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Chhena", quantity: "200g" },
      { name: "Sugar Syrup", quantity: "2 cups" }
    ]
  },
  {
    id: 10,
    name: "Ice Cream",
    description: "Creamy frozen dessert available in many flavors.",
    image: "https://images.unsplash.com/photo-1606788075761-9a0dbf9f0d25?w=600&h=400&fit=crop",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Milk", quantity: "2 cups" },
      { name: "Cream", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" }
    ]
  },
  {
    id: 12,
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie served warm with nuts.",
    image: "https://images.unsplash.com/photo-1606312619070-64ef6f72b316?w=600&h=400&fit=crop",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Dark Chocolate", quantity: "100g" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Butter", quantity: "50g" }
    ]
  }
];
