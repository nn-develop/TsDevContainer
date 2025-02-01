import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TodoApp from "./components/todo";
import DataFetcher from "./components/data-fetch/DataFetcher";
import DataRenderer from "./components/data-fetch/DataRenderer";
import BetterFetchComponent from "./components/better-fetch/BetterFetchComponent";

const newDataRender = (data) => <DataRenderer data={data} path="facts" />;

function App() {
  const [count, setCount] = useState<number>(0);

  const renderDogFacts = useCallback(
    (data) => <DataRenderer data={data} path="facts" />,
    []
  );

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div>
        <button onClick={betterFetch}>give me info</button>
      </div> */}
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>
        {/* <p>Toto je info o psech: {fetchState.data}</p> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TodoApp />
      <div>
        <h1>Fetch and Render Data</h1>
        <DataFetcher
          url="https://dog-api.kinduff.com/api/facts"
          render={renderDogFacts}
        />
      </div>
      <button
        onClick={
          <BetterFetchComponent url="https://dog-api.kinduff.com/api/facts" />
        }
      >
        Give me info
      </button>
    </>
  );
}

export default App;
