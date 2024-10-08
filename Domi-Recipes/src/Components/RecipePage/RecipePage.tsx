import { Card, CardContent } from "../ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRecipe } from "@/@types";
import Loader from "../Loader/Loader";
import NotFound from "../NotFound/NotFound";

interface RecipePageProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function RecipePage({ loading, setLoading }: RecipePageProps) {
  const { slug } = useParams();
  /*   const navigate = useNavigate();
   */ const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get<IRecipe>(
          `https://orecipesapi.onrender.com/api/recipes/${slug}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération de la recette", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [slug, setLoading]);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return <Loader />;
  }

  if (!recipe) {
    return null;
  }

  return (
    <>
      <Card className="mb-6">
        <CardContent className="p-0 relative">
          <img
            src={recipe.thumbnail}
            alt={recipe.title}
            className="w-full h-[32rem] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
            <h2 className="text-2xl font-bold">{recipe.title}</h2>
            <p>
              {recipe.author} • {recipe.difficulty}
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Ingrédients</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={recipe.slug} className="mb-2">
                <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Instructions</h3>
          <ul className="bg-gray-100 p-4 rounded">
            {recipe.instructions.map((instruction) => (
              <li key={recipe.slug} className="mb-2 flex items-start">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2 mt-1 flex-shrink-0" />
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default RecipePage;
