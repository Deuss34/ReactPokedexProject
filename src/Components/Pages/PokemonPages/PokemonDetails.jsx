import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
// import BackButton from "../../ButtonComponents/BackButton";

function PokemonDetails() {
  const { name } = useParams();
  const [PokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemonData(res.data);
      console.log(PokemonData);
    });
  }, [name]);

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

  function backButtonHandler() {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-2 justify-center items-center mb-12">
        <FaArrowAltCircleLeft
          onClick={() => backButtonHandler()}
          className="left-5 absolute w-9 h-auto duration-200 hover:cursor-pointer hover:scale-110"
        />
        <p className="text-3xl font-bold capitalize">{PokemonData?.name}</p>
        <p className="text-3xl font-bold">#{numberFormat(PokemonData?.id)}</p>
      </div>
      <div className="flex flex-row gap-3 justify-center mb-5">
        <img
          src={PokemonData?.sprites.front_default}
          alt=""
          className="w-64 h-auto bg-slate-200 rounded-3xl duration-300 hover:scale-110"
        />
        <div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {PokemonData?.stats.map((stat) => {
              return (
                <div
                  key={stat.effort}
                  className="flex flex-row gap-2 bg-red-300 py-2 px-5 rounded-lg"
                >
                  <p className="capitalize text-base font-semibold">
                    {stat.stat.name}:
                  </p>
                  <p className="capitalize text-base font-semibold">
                    {stat.base_stat}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-row align-center">
            <p className="text-base mr-9 font-semibold">Type:</p>
            <div className="flex flex-row gap-2">
              {PokemonData?.types.map((type) => {
                return (
                  <div
                    key={type.slot}
                    className={`font-medium text-base px-6 rounded-md capitalize ${generateColor(
                      type.type.name
                    )}`}
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 flex flex-row align-center">
            <p className="text-base mr-3 font-semibold">Abilities:</p>
            <div className="flex flex-row gap-2">
              {PokemonData?.abilities.map((ability) => {
                return (
                  <div
                    key={ability.slot}
                    className="font-medium text-base rounded-md capitalize px-6 bg-red-300"
                  >
                    {ability.ability.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <BackButton /> */}
    </div>
  );
}

export default PokemonDetails;
