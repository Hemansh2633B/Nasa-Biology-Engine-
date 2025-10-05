import { useState } from "react";

function HomePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [summary, setSummary] = useState("");
  const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.results);
  };

  const handleDescribe = async () => {
    if (!query) return;
    const res = await fetch(`${API_BASE}/describe?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">BioVerse</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NASA bioscience..."
          className="border p-2 flex-1"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
        <button onClick={handleDescribe} className="bg-green-600 text-white px-4 py-2 rounded">
          Describe
        </button>
      </div>

      {summary && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">AI Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      <ul className="mt-6">
        {results.map((r, i) => (
          <li key={i} className="border-b py-2">
            <h2 className="font-semibold">{r.title}</h2>
            <p>{r.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;



