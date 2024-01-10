/* eslint-disable react/prop-types */

function PreviousPageButton({ page, setPage }) {
  return (
    <button
      className="bg-blue-400 px-3 py-1 text-white rounded-md duration-300 hover:scale-110"
      onClick={() => setPage(page - 1)}
    >
      Previous Page
    </button>
  );
}

export default PreviousPageButton;
