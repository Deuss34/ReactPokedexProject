import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

function CatAPI() {
  const [fact, setFact] = useState("no cat facts to be shown!");
  function fetchFact() {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
    });
  }

  useEffect(() => {
    fetchFact;
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold text-3xl">Random Cat Facts!!</h1>
      <button
        className="my-3 w-48 py-3 px-5 rounded-lg bg-amber-500 duration-300 hover:bg-amber-700 hover:scale-110"
        onClick={fetchFact}
      >
        Generate!
      </button>
      <p className="text-center font-semibold  mb-3 w-3/4">{fact}</p>
    </div>
  );
}

export default CatAPI;
