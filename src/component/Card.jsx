import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const CardContainer = styled.section`
  width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  background: white;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 15px 3px rgba(192, 192, 192, 0.5), 0 0 25px 8px rgba(255, 255, 255, 0.7);
  }

  img {
    width: 150px;
  }
`;

export const Card = memo(({ pokemon }) => {
  console.log("card", pokemon.id);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => setIsImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div className="text-[20px] font-bold text-center">
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
