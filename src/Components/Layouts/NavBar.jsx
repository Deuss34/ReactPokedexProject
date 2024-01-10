import { Link } from "react-router-dom";

function NavBar() {
  const LinkComponent = (label, to) => {
    return (
      <div className="font-bold py-1 px-12 rounded-lg duration-300 hover:bg-beige-light">
        <Link to={to}>{label}</Link>
      </div>
    );
  };

  return (
    <nav>
      <div className="py-3 mb-2 flex flex-row justify-around bg-beige-dark">
        {LinkComponent("Pokedex", "/")}
        {LinkComponent("Cat API", "/CatAPI")}
      </div>
    </nav>
  );
}

export default NavBar;
