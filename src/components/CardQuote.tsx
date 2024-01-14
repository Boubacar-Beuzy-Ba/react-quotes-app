import { useRequest } from "ahooks";
import { getQuotes } from "../services/api";
import RefreshIcon from "../assets/refresh-svgrepo-com.svg";
import LoadingComponent from "./LoadingComponent";

const CardQuote = () => {
  const { data, loading, run } = useRequest(getQuotes);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        data &&
        data.data.map((d: Record<string, string>, index: string) => {
          return (
            <div
              key={index}
              className="mx-4 md:mx-auto h-screen flex justify-center items-center w-auto md:w-1/2 align-middle"
            >
              <div className="mx-auto rounded shadow-2xl border">
                <div className="w-full p-4 bg-cyan-300">
                  <p>{d.quote}</p>
                </div>
                <div className="mx-auto p-2 my-4 flex justify-end gap-4">
                  <h3 className="antialiased italic">{d.author}</h3>
                </div>
                <div className="flex justify-between">
                  <span className="p-2 bg-amber-400 -ml-1 rounded-tl-2xl rounded-br-2xl w-fit text-end text-pretty">
                    {d.category}
                  </span>
                  <div className="flex justify-center">
                    <button
                      className="flex justify-end p-2 hover:bg-gray-200"
                      onClick={() => run()}
                    >
                      <img
                        src={RefreshIcon}
                        alt={RefreshIcon}
                        className="w-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default CardQuote;