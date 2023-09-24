import { useState, useEffect } from 'react';
import { TMDB_API_URL, TMDB_URL_ADDER } from '../config/apiConfig';


const useFetchtmdb = (part:String) => {
  const [data, setData] = useState(null);
  const [loading, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

      fetch(`${TMDB_API_URL}${part}${part.includes("?") ? "&" : "?"}${TMDB_URL_ADDER}`, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('Could Not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        // console.log(data);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      });

    // abort the fetch
    return () => abortCont.abort();
  }, [part])

  return { data, loading, error };
}
 
export default useFetchtmdb;