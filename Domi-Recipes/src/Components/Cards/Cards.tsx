import SingleCard from "../Card/SingleCard";
import Loader from "../Loader/Loader";
import { IRecipe } from "../../@types"; // Assurez-vous que le chemin est correct pour accéder aux types

interface CardsProps {
  list: IRecipe[]; // Déclarez une prop 'list' qui est un tableau d'objets 'IRecipe'
  loading: boolean;
}

function Cards({ list, loading }: CardsProps) {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Les recettes à la carte
      </h1>
      {loading && <Loader />}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((recipe) => (
          <SingleCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
