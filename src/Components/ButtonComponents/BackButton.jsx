import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  function backButtonHandler() {
    navigate("/");
  }
  return (
    <button
      onClick={() => {
        backButtonHandler();
      }}
      className="p-3 mb-3 bg-black text-white rounded-2xl duration-300 hover:scale-110  "
    >
      back to Pokedex
    </button>
  );
}

export default BackButton;
