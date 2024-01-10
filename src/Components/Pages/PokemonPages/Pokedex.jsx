import { useEffect, useState } from "react";
import Axios from "axios";
import PokemonCard from "./PokemonCard";
import NextPageButton from "../../ButtonComponents/NextPageButton";
import PreviousPageButton from "../../ButtonComponents/PreviousPageButton";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  function fetchPokemon({ page }) {
    setLoading(true);
    let offset = page * 10;
    Axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
    ).then((res) => {
      setPokemons(res.data.results);
      console.log({ pokemons, page });
      setLoading(false);
    });
  }
  useEffect(() => {
    fetchPokemon({ page });
  }, []);

  useEffect(() => {
    fetchPokemon({ page });
  }, [page]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <p className="text-4xl w-full mb-3 font-bold text-center">Pokedex</p>
          <div className="grid grid-cols-5 gap-1">
            {pokemons.map((pokemon) => {
              return (
                <div key={pokemon.name}>
                  <PokemonCard pokemon={pokemon} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center mt-3 mb-1">
            <div className="flex flex-row gap-4">
              <PreviousPageButton page={page} setPage={setPage} />
              <NextPageButton page={page} setPage={setPage} />
            </div>
            <p className="m-2 px-3 py-1 bg-slate-500 rounded-full">
              {page + 1}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Pokedex;
