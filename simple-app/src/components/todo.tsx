import { useState, useReducer, Reducer } from "react";

// Typ pro jednotlivé úkoly
interface Task {
  id: number;
  text: string;
}

// Typ pro stav - pole úkolů
type State = Task[];

// Typ pro akce, které mohou být odeslány do reduceru
type Action = { type: "add"; text: string } | { type: "remove"; id: number };

// Počáteční stav
const initialState: State = [];

interface FormReducerState {
  name: string;
  surname: string;
  age: number;
}

type FormAction =
  | { type: "setName"; value: string }
  | { type: "setSurname"; value: string }
  | { type: "setAge"; value: number };

const formReducer: Reducer<FormReducerState, FormAction> = (
  prevState,
  action
) => {
  switch (action.type) {
    case "setName":
      return { name: action.value, ...prevState };
    case "setSurname":
      return { ...prevState, name: action.value };
    default:
      return prevState;
  }
};

// Reducer funkce s typovou anotací
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter((task) => task.id !== action.id);
    default:
      throw new Error("Neznámá akce");
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState<string>(""); // Typová anotace?? pro stav vstupu

  const addTask = () => {
    if (input.trim() === "") return; // Kontrola prázdného vstupu
    dispatch({ type: "add", text: input });
    setInput(""); // Vymazání vstupu
  };

  return (
    <div>
      <h1>Úkoly</h1>
      <input
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        } // Typ u `e` dávat nebo ne?
      />
      <button onClick={addTask}>Přidat</button>
      <ul>
        {state.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch({ type: "remove", id: task.id })}>
              Odstranit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
