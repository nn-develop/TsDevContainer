export type FetchState<T> =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: T };

export const fetchDataWithState = async (
  url: string,
  setFetchState: React.Dispatch<React.SetStateAction<FetchState>>
) => {
  try {
    setFetchState({ status: "loading" });
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    setFetchState({ status: "success", data });
  } catch (err) {
    setFetchState({ status: "error", error: (err as Error).message });
  }
};
