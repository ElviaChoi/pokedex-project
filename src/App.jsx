import React, { Suspense, lazy, useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <Link to='/'>
        <h1 className='border-t-50 border-t-[red] bg-black text-white text-[40px] text-center'>
          포켓몬 도감
        </h1>
      </Link>
      <nav className='bg-white py-3 border-b-2 border-b-black flex gap-[20px] justify-center font-semibold text-lg'>
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div>
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            className='w-[120px] border-b border-[darkgray] px-2'
          />
          <span>🔍</span>
        </div>
      </nav>
      <main className='flex flex-wrap gap-7 justify-center py-8 lg:max-w-[1228px] mx-auto px-4 sm:px-6 lg:px-8'>
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
