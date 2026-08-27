import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
      {/* Floating Control Center - Snaps to full opacity on hover */}
      <div className="flex items-center gap-2 p-2 bg-white rounded-xl shadow-md opacity-50 hover:opacity-100 border border-gray-200">
        
        {/* Search Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          {/* Magnifying Glass Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Theme Toggle Button (Sun Icon) */}
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </div>

      {/* Dropdown Input Rectangle */}
      {isOpen && (
        <form onSubmit={handleSearchSubmit} className="bg-white p-2 rounded-xl shadow-md border border-gray-200">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books..."
            className="w-64 p-2 bg-gray-50 rounded-lg outline-none text-black border border-gray-200"
            autoFocus
          />
        </form>
      )}
    </div>
  );
}