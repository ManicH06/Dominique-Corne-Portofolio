import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CardContent } from "../ui/card";
import { Card } from "../ui/card";

function SingleCard({ ...rest }) {
  return (
    <Card>
      <CardContent>
        <img
          src={rest.thumbnail}
          alt="Cookies"
          className="w-full h-48 object-cover mb-4 rounded"
          width="300"
          height="200"
          style={{ aspectRatio: "300/200", objectFit: "cover" }}
        />
        <h2 className="text-xl font-semibold">{rest.title}</h2>
        <p className="text-sm text-muted-foreground">
          Difficulté : {rest.difficulty}
        </p>
        <Link to={rest.slug}>
          <Button className="mt-4 w-full bg-blue-500 text-white">
            Voir la recette
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default SingleCard;
