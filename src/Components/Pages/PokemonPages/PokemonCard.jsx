/* eslint-disable react/prop-types */
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon }) {
  let navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(
      (res) => {
        setPokemonData(res.data);
      }
    );
  }, [pokemon]);

  function generateColor(typeName) {
    if (typeName === "grass") {
      return "bg-green-500";
    } else if (typeName === "fire") {
      return "bg-red-500";
    } else if (typeName === "poison") {
      return "bg-pink-500";
    } else if (typeName === "rock") {
      return "bg-yellow-600";
    } else if (typeName === "water") {
      return "bg-blue-400";
    } else if (typeName === "flying") {
      return "bg-blue-200";
    } else if (typeName === "bug") {
      return "bg-lime-600";
    } else if (typeName === "electric") {
      return "bg-yellow-400";
    } else if (typeName === "ground") {
      return "bg-amber-600";
    } else if (typeName === "fairy") {
      return "bg-red-200";
    } else if (typeName === "fighting") {
      return "bg-red-700";
    } else if (typeName === "psychic") {
      return "bg-violet-400";
    } else if (typeName === "ice") {
      return "bg-cyan-300";
    } else if (typeName === "steel") {
      return "bg-slate-400";
    } else if (typeName === "ghost") {
      return "bg-violet-600";
    } else if (typeName === "dragon") {
      return "bg-violet-500";
    } else if (typeName === "dark") {
      return "bg-amber-900";
    }
    return "bg-slate-300";
  }

  function numberFormat(number) {
    return String(number).padStart(4, "0");
  }

  function PokemonCardHandler() {
    navigate(`/pokemondetails/${pokemon.name}`);
  }

  return (
    <>
      <div
        className="cursor-pointer mx-7 my-2 flex flex-col items-center"
        onClick={() => {
          PokemonCardHandler();
        }}
      >
        <div className="bg-slate-200 border-2 border-black rounded-md">
          <img
            src={pokemonData?.sprites.front_default}
            alt=""
            className="w-36 h-auto duration-300 hover:scale-110"
          />
          <p className="text-center font-semibold capitalize">
            {" "}
            {pokemonData?.name}
          </p>
          <div className="flex flex-row gap-2 items-center justify-center capitalize">
            {pokemonData?.types.map((type) => {
              return (
                <div
                  key={type.slot}
                  className={`px-3 py-1 rounded-md ${generateColor(
                    type.type.name
                  )}`}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <p className="text-center font-semibold">
            #{numberFormat(pokemonData?.id)}
          </p>
          {/* {console.log(pokemonData?.types[0].type.name)} */}
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
