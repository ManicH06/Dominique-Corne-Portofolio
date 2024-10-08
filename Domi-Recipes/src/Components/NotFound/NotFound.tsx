// Import des dependances et bibliotheque necessaire
import { Link } from 'react-router-dom';

// Import des composants UI
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '../ui/card';
import { Button } from '../ui/button';

// Import des icons
import { RiCake3Fill } from 'react-icons/ri';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <RiCake3Fill className="mx-auto h-24 w-24 text-muted-foreground" />
          <h2 className="text-2xl font-semibold">Oups ! Recette introuvable</h2>
          <p className="text-muted-foreground">
            Désolé, la page ou la recette que vous recherchez semble avoir
            disparu de notre cuisine.
          </p>
          <p className="text-muted-foreground">
            Veuillez réessayer plus tard ou tenter une autre aventure culinaire
            !
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/">Accueil</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default NotFound;