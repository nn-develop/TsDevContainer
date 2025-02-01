interface DataRendererProps<T> {
  data: T;
  path?: string; // Volitelná cesta k datům (např. "facts")
}

const DataRenderer = <T,>({ data, path }: DataRendererProps<T>) => {
  const resolvedData = path
    ? path.split(".").reduce((acc, key) => acc?.[key], data)
    : data;

  if (Array.isArray(resolvedData)) {
    return (
      <ul>
        <p>Jsem tady</p>
        {resolvedData.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    );
  }

  return <div>{JSON.stringify(resolvedData)}</div>;
};

export default DataRenderer;
