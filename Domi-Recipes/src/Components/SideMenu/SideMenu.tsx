import { Link } from "react-router-dom";
import { IRecipe } from "@/@types";

interface MenuProps {
  list: IRecipe[];
}

function SideMenu({ list }: MenuProps) {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Accueil</h2>
      <nav>
        <ul className="space-y-2">
          <Link to="/" className="block text-lg font-bold">
            Accueil
          </Link>
          {list.map((entries) => (
            <li key={entries.id}>
              <Link to={entries.slug} className="block text-lg font-bold">
                {entries.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenu;
