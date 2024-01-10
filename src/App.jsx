import { Routes, Route } from "react-router-dom";
import Pokedex from "./Components/Pages/PokemonPages/Pokedex";
import PokemonDetails from "./Components/Pages/PokemonPages/PokemonDetails";
import CatAPI from "./Components/Pages/CatAPI";
import PageLayout from "./Components/Layouts/PageLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokemondetails/:name" element={<PokemonDetails />} />
          <Route path="/CatAPI" element={<CatAPI />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
