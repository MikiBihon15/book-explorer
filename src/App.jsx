import SearchBar from './components/search_bar';

export default function App() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SearchBar onSearch={handleSearch} />
      
      <div className="p-10 mt-16">
        <h1 className="text-3xl font-bold mb-4">Book Explorer</h1>
        <p className="text-gray-500">The book grid will go here next.</p>
      </div>
    </div>
  );
}