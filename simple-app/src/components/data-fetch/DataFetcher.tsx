import { useState, useEffect } from "react";
import { fetchDataWithState, FetchState } from "./fetchData";

/* cílem je vytvořit komponentu, která bude přebírat tyto parametry:
url: string - adresa, ze které se budou data stahovat
co má vykreslit:
  pokud data stahuje - předvolené "Loading..."
  pokud se nepodaří stáhnout - předvolené "Error: {chyba}"
  pokud se stáhnou - devinovat */

/* 
musím udržovat stav o tom, zda mám nebo nemám data
 */


// interface DataFetcherProps<T> {
//   url: string;
//   render: (data: T) => React.ReactNode;
// }

// const DataFetcher = <T,>({ url, render }: DataFetcherProps<T>) => {
//   const [fetchState, setFetchState] = useState<FetchState<T>>({
//     status: "loading",
//   });

  // useEffect(() => {
  //   fetchDataWithState(url, setFetchState);
  // }, [url]);

//   if (fetchState.status === "loading") return <div>Loading...</div>;
//   if (fetchState.status === "error")
//     return <div>Error: {fetchState.error}</div>;
//   if (fetchState.status === "success") return <>{render(fetchState.data)}</>;

//   return null;
// };

// export default DataFetcher;
