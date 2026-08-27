import BookCard from './book_card';

export default function BookList({ books, isLoading, hasSearched, onBookClick }) {
  if (isLoading) {
    return <div className="text-center mt-20 text-gray-500 font-medium">Loading books...</div>;
  }

  if (hasSearched && books.length === 0) {
    return <div className="text-center mt-20 text-gray-500 font-medium">No books found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <BookCard key={book.key || index} book={book} onClick={onBookClick} />
      ))}
    </div>
  );
}