import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <img
          src="logo.png"
          alt="oRecipes Logo"
          width={40}
          height={40}
          className="mr-4"
        />
        <h1 className="text-3xl font-bold text-blue-500">
          Les recettes Domi-Recipes
        </h1>
      </div>
      <div className="flex space-x-2">
        <Input type="email" placeholder="Adresse Email" />
        <Input type="password" placeholder="Mot de passe" />
        <Button>OK</Button>
      </div>
    </header>
  );
}

export default Header;
