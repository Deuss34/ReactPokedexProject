/* eslint-disable react/prop-types */
function NextPageButton({ page, setPage }) {
  return (
    <button
      className="bg-blue-400 px-3 py-1 text-white rounded-md duration-300 hover:scale-110"
      onClick={() => {
        setPage(page + 1);
      }}
    >
      Next Page
    </button>
  );
}

export default NextPageButton;
