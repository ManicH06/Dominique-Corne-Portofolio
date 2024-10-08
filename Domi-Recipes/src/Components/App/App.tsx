// Importation des composants nécessaires et des bibliothèques
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import NotFound from "../NotFound/NotFound";
import RecipePage from "../RecipePage/RecipePage";
import axios from "axios";
import { IRecipe } from "../../@types";

function App() {
  const [recipeList, setRecipeList] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Lorsque l'emplacement change, remettre le scroll de la fenêtre en haut de la page
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location]);

  // Définition d'une fonction asynchrone pour récupérer la liste des recettes
  const fetchRecipe = async () => {
    try {
      // Effectuer une requête GET vers l'API fournie pour récupérer les recettes
      const response = await axios.get<IRecipe[]>(
        "https://orecipesapi.onrender.com/api/recipes"
      );
      setRecipeList(response.data);

      // console.log(response.data)
    } catch (error) {
      // Afficher toute erreur rencontrée lors de l'opération de récupération dans la console
      console.error(
        "Erreur lors de la récupération de la liste des recettes :",
        error
      );
    }
    setLoading(false);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Affiche le composant SideMenu */}
      <SideMenu list={recipeList} />
      <main className="flex-1 p-6">
        {/* Affiche le composant Header */}
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  {/* Affichage du nombre de recettes */}
                  Voici nos {recipeList.length} recettes
                </h2>
                {/* Affichage des cartes de recettes */}
                <Cards list={recipeList} loading={loading} />
              </>
            }
          />
          <Route path="/:slug" element={<RecipePage loading={loading} setLoading={setLoading} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Affiche le composant Cards */}
      </main>
    </div>
  );
}

export default App;
