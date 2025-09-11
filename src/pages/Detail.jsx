import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div className='min-h-screen flex justify-center items-center px-4 py-8'>
      <div className='bg-white drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] transition-all duration-300 rounded-xl px-10 py-8 max-w-md w-full text-center hover:translate-y-[-4px] hover:shadow-[0_0_20px_5px_rgba(192,192,192,0.5),_0_0_35px_12px_rgba(255,255,255,0.7)]'>
        <div className='text-3xl font-bold mb-7'>
          {pokemon.name}
          <FavoriteButton pokemonId={Number(pokemonId)} />
        </div>
        <div className='whitespace-pre-wrap text-center'>
          {pokemon.description}
        </div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
      </div>
    </div>
  );
}
