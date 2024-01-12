import { useRequest } from "ahooks";
import { getQuotes } from "../services/api";

const CardQuote = () => {
    const {data, loading} = useRequest(getQuotes);

    return(
        <>
        {loading ? 'Data is loading' : data && data.data.map((d: Record<string,string>,index: string) => {
            return (
                <div key={index}>
                <p>{d.quote}</p>
                <h3>{d.author}</h3>
                <span>{d.category}</span>
                </div>
            )
        })}
        </>
    )
}

export default CardQuote;