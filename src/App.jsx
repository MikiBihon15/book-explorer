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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  
  //Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  

  return (
    <div className={isDarkMode ? "dark min-h-screen bg-gray-900 text-white font-sans" : "min-h-screen bg-gray-50 text-black font-sans"}>
      <SearchBar 
        onSearch={setSearchQuery} 
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />
      
      <div className="p-10 mt-16 max-w-screen-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Book Explorer</h1>
        
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

      {/* PASTE IT HERE: Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-100 z-50 text-black transition-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

    </div>
  );
}