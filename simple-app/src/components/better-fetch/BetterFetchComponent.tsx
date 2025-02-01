import { useState, useEffect } from "react";

type Loading = { _tag: "Loading" };
type Error = { _tag: "Error" };
type Data = { _tag: "Data"; data: string };

type FetchState = Loading | Error | Data;

const withAsyncBetter =
  (setFetchState: (state: FetchState) => void) => async () => {
    try {
      setFetchState({ _tag: "Loading" });
      const response = await fetch("https://dog-api.kinduff.com/api/facts");
      const data = await response.json();
      setFetchState({ _tag: "Data", data: data.facts[0] });
    } catch (err) {
      console.error(err);
      setFetchState({ _tag: "Error" });
    }
  };

const BetterFetchComponent = () => {
  const [fetchState, setFetchState] = useState<FetchState>({
    _tag: "Data",
    data: "--------",
  });

  const betterFetch = withAsyncBetter(setFetchState);

  useEffect(() => {
    betterFetch();
  }, [betterFetch]);

  if (fetchState._tag === "Loading") {
    return <div>Loading...</div>;
  }

  if (fetchState._tag === "Error") {
    return <div>Error!!!</div>;
  }

  return <div>{fetchState.data}</div>;
};

export default BetterFetchComponent;
