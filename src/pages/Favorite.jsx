import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "../RTK/selector";
import { Card } from "../component/Card";

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <div className="bg-[gray] min-h-screen flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
  );
}
