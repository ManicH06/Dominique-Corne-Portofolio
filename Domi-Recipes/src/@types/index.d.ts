// Interface pour représenter un ingrédient individuel
export interface IIngredient {
    id: number;        // Identifiant unique de l'ingrédient
    quantity: number;  // Quantité de l'ingrédient
    unit: string;      // Unité de mesure (g, cc, pincée, etc.)
    name: string;      // Nom de l'ingrédient
  }
  
  // Interface pour représenter une recette
  export interface IRecipe {
    id: number;                 // Identifiant unique de la recette
    title: string;              // Titre de la recette
    slug: string;               // Slug URL-friendly de la recette
    thumbnail: string;          // URL de la miniature de la recette
    author: string;             // Nom de l'auteur de la recette
    difficulty: string;         // Niveau de difficulté de la recette
    description: string;        // Description courte ou portion de la recette
    ingredients: Ingredient[];  // Liste des ingrédients, utilisant l'interface Ingredient
    instructions: string[];     // Liste des instructions de la recette
  }