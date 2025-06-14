import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div className="bg-[gray] min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_24px_36px_rgba(0,0,0,0.6)] transition-shadow duration-300 rounded-xl px-10 py-8 max-w-md w-full text-center">
        <div className="text-[28px] font-bold mb-[10px]">
          {pokemon.name}
          <FavoriteButton pokemonId={Number(pokemonId)} />
        </div>
        <div className="whitespace-pre-wrap text-center">
          {pokemon.description}
        </div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
      </div>
    </div>
  );
}
