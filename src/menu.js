// menu.js
export const menuData = {
    cocktails: {
      title: "Cocktails",
      items: [
        {
          name: "FROZÉ",
          description: "Diseño Rosé, Jam Jar Sweet Shiraz, strawberries",
          price: 12,
          type: "frozen_cocktail",
          moodPairings: ["celebratory", "social"],
          ingredients: ["Diseño Rosé", "Jam Jar Sweet Shiraz", "Strawberries"]
        },
        {
          name: "Tequila Fix",
          description: "Corazón Blanco Tequila, watermelon, lime",
          price: 13,
          type: "spirits",
          moodPairings: ["relaxed", "social"],
          ingredients: ["Corazón Blanco Tequila", "Watermelon", "Lime"]
        },
        {
          name: "THE DREAMSICLE",
          description: "Wheatley Vodka, Licor 43, Peychaud's bitters, oj, lemon",
          price: 14,
          type: "spirits",
          moodPairings: ["relaxed", "indulgent"],
          ingredients: ["Wheatley Vodka", "Licor 43", "Peychaud's bitters", "Orange Juice", "Lemon"]
        },
        {
          name: "Beekeep",
          description: "Benchmark Bourbon, honey, lemon, grapefruit",
          price: 13,
          type: "spirits",
          moodPairings: ["sophisticated", "relaxed"],
          ingredients: ["Benchmark Bourbon", "Honey", "Lemon", "Grapefruit"]
        },
        {
          name: "PINKY PROMISE",
          description: "pomegranate-infused Wheatley Vodka, Dr. Loosen Riesling, lemon",
          price: 13,
          type: "frozen_cocktail",
          moodPairings: ["celebratory", "social"],
          ingredients: ["Pomegranate-infused Wheatley Vodka", "Dr. Loosen Riesling", "Lemon"]
        },
        {
          name: "SCARLET LETTER SANGRITA",
          description: "Corazón Blanco Tequila, Sparkling Brut Rosé, Regan's orange bitters, mixed berry simple, pomegranate",
          price: 14,
          moodPairings: ["romantic", "celebratory"],
          ingredients: ["Corazón Blanco Tequila", "Sparkling Brut Rosé", "Regan's Orange Bitters", "Mixed Berry Simple", "Pomegranate"]
        },
        {
          name: "GUNS & ROSÉ",
          description: "L'Oiseau Rosé, St-Germain, Fever-Tree club soda, elderflower, strawberries",
          price: 14,
          moodPairings: ["romantic", "relaxed"],
          ingredients: ["L'Oiseau Rosé", "St-Germain", "Fever-Tree Club Soda", "Elderflower", "Strawberries"]
        }
      ]
    },
    canned_rose: {
      title: "Canned Rosé",
      items: [
        {
          name: "LA VIE BY LVE",
          description: "Rosé",
          origin: "Pays d'Oc, France",
          price: 15,
          type: "wine",
          moodPairings: ["relaxed", "social"]
        },
        {
          name: "MERF",
          description: "Rosé",
          origin: "Washington",
          price: 13,
          type: "wine",
          moodPairings: ["social", "celebratory"]
        },
        {
          name: "COASTAL ROSÉ",
          description: "Watermelon Spritz",
          origin: "Washington",
          price: 14,
          type: "wine",
          moodPairings: ["refreshing", "relaxed"]
        },
        {
          name: "NOMADICA",
          description: "Sparkling Rosé",
          origin: "California",
          price: 15,
          type: "wine",
          moodPairings: ["celebratory", "social"]
        }
      ]
    },
    beers: {
      title: "Beers",
      items: [
        {
          name: "BEARDED IRIS BREWING 'HOMESTYLE IPA'",
          description: "IPA",
          price: 10,
          type: "beer",
          moodPairings: ["relaxed", "social"]
        },
        {
          name: "BLACK ABBEY BREWING 'THE ROSE'",
          description: "Blonde Ale",
          price: 7,
          type: "beer",
          moodPairings: ["social", "casual"]
        },
        {
          name: "YAZOO BREWING COMPANY 'GERST'",
          description: "Amber Ale",
          price: 8,
          type: "beer",
          moodPairings: ["relaxed", "adventurous"]
        }
      ]
    },
    boards: {
      title: "Boards",
      description: "One for 6, Three for 18, Five for 30. Served with chef procured accoutrements.",
      items: [
        {
          name: "COPPA",
          description: "cured pork shoulder",
          price: 8,
          type: "salumi",
          allergens: ["pork"],
          moodPairings: ["sophisticated", "indulgent"]
        },
        {
          name: "PROSCIUTTO DI PARMA",
          description: "farm aged ham, 18 months",
          price: 12,
          type: "salumi",
          allergens: ["pork"],
          moodPairings: ["sophisticated", "romantic"]
        },
        {
          name: "FINOCCHIONA",
          description: "fennel seasoned salame",
          price: 15,
          type: "salumi",
          allergens: ["pork"],
          moodPairings: ["social", "indulgent"]
        },
        {
          name: "SPECK",
          description: "lightly smoked, aged ham",
          price: 13,
          type: "salumi",
          allergens: ["pork"],
          moodPairings: ["sophisticated", "social"]
        },
        {
          name: "COWGIRL CREAMERY MT TAM",
          description: "cow milk, triple cream, bloomed",
          price: 20,
          type: "cheese",
          allergens: ["dairy"],
          origin: "CA",
          moodPairings: ["indulgent", "romantic"]
        },
        {
          name: "ROGUE SMOKEY BLUE",
          description: "cow milk, smoked over hazelnut shells",
          price: 13,
          type: "cheese",
          allergens: ["dairy"],
          origin: "OR",
          moodPairings: ["adventurous", "sophisticated"]
        }
      ]
    },
    shared_plates: {
      title: "Shared Plates",
      items: [
        {
          name: "CITRUS OLIVES",
          description: "mixed whole olives, fennel, chilis, orange, basil",
          price: 10,
          dietary: ["vegetarian", "vegan", "gluten-free"],
          moodPairings: ["adventurous", "relaxed"]
        },
        {
          name: "HUMMUS",
          description: "red beet hummus, edamame hummus, crisped flatbread",
          price: 12,
          dietary: ["vegetarian"],
          moodPairings: ["social", "healthy"]
        },
        {
          name: "GRILLED GOLDEN BEETS",
          description: "whipped feta, toasted pistachio, apricot vinaigrette",
          price: 13,
          allergens: ["dairy", "nuts"],
          dietary: ["vegetarian", "gluten-free"],
          moodPairings: ["sophisticated", "indulgent"]
        }
      ]
    },
    pizzas: {
      title: "Pizzas",
      items: [
        {
          name: "SHRIMP & SMOKED BACON",
          description: "white sauce, provolone, mozzarella, garlic, scallion, lemon juice, crushed red pepper",
          price: 19,
          allergens: ["dairy", "shellfish", "pork"],
          moodPairings: ["indulgent", "hearty"]
        },
        {
          name: "FIG & PROSCIUTTO",
          description: "white sauce, mozzarella, honey, arugula, sesame seeds",
          price: 18,
          allergens: ["dairy", "pork"],
          moodPairings: ["romantic", "sophisticated"]
        },
        {
          name: "MARGHERITA",
          description: "san marzano tomato, mozzarella, pecorino romano, basil, olive oil",
          price: 17,
          allergens: ["dairy"],
          dietary: ["vegetarian"],
          moodPairings: ["classic", "relaxed"]
        },
        {
          name: "SPICY SAUSAGE",
          description: "tomato sauce, house made sausage, mozzarella, provolone, pickled fresno peppers, fennel",
          price: 19,
          allergens: ["dairy", "pork"],
          moodPairings: ["spicy", "hearty"]
        },
        {
          name: "BROCCOLINI & POTATO",
          description: "roasted broccolini, crushed potato, calabrian chilies, tomato, rosemary, cashew cheese, cauliflower crust",
          price: 20,
          allergens: ["nuts"],
          dietary: ["vegan", "gluten-free"],
          moodPairings: ["healthy", "adventurous"]
        }
      ]
    },
    desserts: {
      title: "Desserts",
      items: [
        {
          name: "OLIVE OIL CITRUS CAKE",
          description: "mascarpone whip, seasonal fruit",
          price: 9,
          allergens: ["dairy", "gluten"],
          moodPairings: ["indulgent", "sophisticated"]
        },
        {
          name: "STICKY TOFFEE CAKE",
          description: "rum cake, roasted pineapple, ginger, creme anglaise",
          price: 9,
          allergens: ["dairy", "gluten"],
          moodPairings: ["indulgent", "adventurous"]
        },
        {
          name: "BASQUE CHEESECAKE",
          description: "caramelized cheesecake, luxardo cherries",
          price: 9,
          allergens: ["dairy", "gluten"],
          moodPairings: ["romantic", "sophisticated"]
        },
        {
          name: "DEVILED AFFOGATO",
          description: "devil's food cake, vanilla ice cream, coffee caramel, nitro cold brew coffee shot",
          price: 9,
          allergens: ["dairy", "gluten"],
          moodPairings: ["indulgent", "playful"]
        }
      ]
    },
    cafe: {
      title: "Café & NA",
      items: [
        {
          name: "Nitro Cold Brew",
          description: "CALUSA COFFEE",
          price: 6,
          moodPairings: ["energized", "focused"]
        },
        {
          name: "Fresh Brewed Coffee",
          description: "CALUSA COFFEE",
          price: 5,
          moodPairings: ["classic", "focused"]
        },
        {
          name: "Espresso",
          description: "Single or Double Shot",
          price: 3,
          variations: [
            { name: "Single", price: 3 },
            { name: "Double", price: 4 }
          ],
          moodPairings: ["energized", "sophisticated"]
        },
        {
          name: "Cappuccino",
          description: "Whole, almond, or oat milk",
          price: 5,
          dietary: ["dairy-free-option"],
          moodPairings: ["relaxed", "classic"]
        },
        {
          name: "Latte",
          description: "Whole, almond, or oat milk",
          price: 5,
          dietary: ["dairy-free-option"],
          moodPairings: ["relaxed", "sophisticated"]
        },
        {
          name: "WALKER BROTHERS KOMBUCHA",
          description: "Seasonal",
          price: 7,
          dietary: ["vegan", "gluten-free"],
          moodPairings: ["healthy", "refreshing"]
        }
      ]
    }
  };

  export const allergensList = [
    { id: "dairy", name: "Dairy", icon: "🥛" },
    { id: "nuts", name: "Nuts", icon: "🥜" },
    { id: "gluten", name: "Gluten", icon: "🌾" },
    { id: "shellfish", name: "Shellfish", icon: "🦐" },
    { id: "pork", name: "Pork", icon: "🐷" }
  ];
  
  export const dietaryPreferences = [
    { id: "vegetarian", name: "Vegetarian", icon: "🥗" },
    { id: "vegan", name: "Vegan", icon: "🌱" },
    { id: "gluten-free", name: "Gluten Free", icon: "🌾" }
  ];
  
  export const moodPairings = [
    { id: "romantic", name: "Romantic", icon: "💝" },
    { id: "celebratory", name: "Celebratory", icon: "🎉" },
    { id: "relaxed", name: "Relaxed", icon: "😌" },
    { id: "social", name: "Social", icon: "👥" }
  ];
  
  export const winePairings = {
      flavor_profiles: {
        bright: ["Sauvignon Blanc", "Pinot Grigio", "Verdejo"],
        rich: ["Chardonnay", "Viognier"],
        light_red: ["Pinot Noir", "Grenache"],
        bold_red: ["Cabernet Sauvignon", "Syrah"],
        sparkling: ["Sparkling Rosé", "Champagne", "Cava"]
      },
      food_pairings: {
        seafood: ["Sauvignon Blanc", "Chablis", "Verdejo"],
        cured_meats: ["Rosé", "Pinot Noir", "Chianti"],
        rich_cheese: ["Chardonnay", "Cabernet Sauvignon"],
        spicy: ["Riesling", "Gewürztraminer"],
        vegetarian: ["Grüner Veltliner", "Pinot Noir", "Rosé"]
      }
  };
    
  export const ingredientDetails = {
      spirits: {
        "Corazón Blanco Tequila": {
          description: "Premium blanco tequila made from 100% blue agave",
          flavor_notes: ["citrus", "pepper", "agave"],
          origin: "Jalisco, Mexico"
        },
        "Wheatley Vodka": {
          description: "Craft vodka distilled 10 times",
          flavor_notes: ["clean", "smooth", "subtle wheat"],
          origin: "Kentucky, USA"
        }
      },
      cheeses: {
        "Cowgirl Creamery MT TAM": {
          description: "Organic triple-cream cheese with a bloomy rind",
          flavor_notes: ["buttery", "mushroomy", "fresh cream"],
          aging: "3 weeks",
          milk_type: "Cow's milk",
          origin: "California, USA"
        }
      },
      cured_meats: {
        "Prosciutto Di Parma": {
          description: "Traditional dry-cured ham from Parma",
          aging: "18 months",
          flavor_notes: ["sweet", "delicate", "slightly salty"],
          origin: "Parma, Italy"
        }
      }
  };
  
  export const aiResponses = {
      // All your existing aiResponses functions...
      ingredients: (item) => {
        const details = ingredientDetails[item.type]?.[item.name];
        return `${item.name} features ${item.ingredients?.join(', ')}. ${
          details ? 
          `\n\nSpecial ingredients highlight:
          ${details.description}
          Flavor notes: ${details.flavor_notes.join(', ')}
          Origin: ${details.origin}` 
          : ''
        }`;
      },
      
      allergies: (item) => {
        const response = [];
        if (item.allergens?.length) {
          response.push(`${item.name} contains the following allergens: ${item.allergens.join(', ')}.`);
        } else {
          response.push(`${item.name} contains no common allergens.`);
        }
        
        if (item.dietary?.length) {
          response.push(`This dish is suitable for ${item.dietary.join(' and ')} diets.`);
        }
        
        response.push("Please inform your server about any specific allergies or dietary restrictions.");
        return response.join('\n');
      },
  
      wine_pairing: (item) => {
        let pairingSuggestions = [];
        
        // Based on dish type
        if (item.type === 'seafood') {
          pairingSuggestions = [...winePairings.food_pairings.seafood];
        } else if (item.allergens?.includes('pork') || item.type === 'cured_meat') {
          pairingSuggestions = [...winePairings.food_pairings.cured_meats];
        }
    
        // Based on flavors
        if (item.spice_level === 'spicy' || item.description?.toLowerCase().includes('chili')) {
          pairingSuggestions.push(...winePairings.food_pairings.spicy);
        }
    
        // Remove duplicates and format response
        const uniquePairings = [...new Set(pairingSuggestions)];
        return `For ${item.name}, I recommend:
        ${uniquePairings.map(wine => `• ${wine}`).join('\n')}
        
        Would you like me to tell you more about any of these wines?`;
      },
  
      // Rest of your aiResponses functions...
  };