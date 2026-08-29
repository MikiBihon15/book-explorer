import { useState, useEffect } from 'react';
import SearchBar from './components/search_bar';
import BookList from './components/book_list';
import BookDetailsModal from './components/book_details_modal';
import { searchBooks } from './api/openLibrary';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // useEffect triggers the fetch whenever searchQuery updates
  useEffect(() => {
    const fetchResults = async () => {
      const queryToSearch = searchQuery.trim() !== '' ? searchQuery : 'Novel';
      
      setIsLoading(true);
      setHasSearched(true);
      
      const results = await searchBooks(queryToSearch);
      setBooks(results);
      
      setIsLoading(false);
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SearchBar onSearch={setSearchQuery} />
      
      <div className="p-10 mt-16 max-w-screen-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black">Book Explorer</h1>
        
        <BookList 
          books={books} 
          isLoading={isLoading} 
          hasSearched={hasSearched} 
          onBookClick={setSelectedBook} 
        />
      </div>

      {selectedBook && (
        <BookDetailsModal 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}
    </div>
  );
}