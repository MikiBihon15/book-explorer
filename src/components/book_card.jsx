import { getCoverUrl } from '../api/openLibrary';

export default function BookCard({ book, onClick }) {
  const coverUrl = getCoverUrl(book.cover_i);

  return (
    <div 
      onClick={() => onClick(book)}
      className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:scale-105 transition-none shadow-sm flex flex-col h-full"
    >
      {coverUrl ? (
        <img 
          src={coverUrl} 
          alt={book.title} 
          className="w-full h-48 object-cover mb-4 rounded bg-gray-100"
        />
      ) : (
        <div className="w-full h-48 mb-4 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          No Cover
        </div>
      )}
      <h3 className="font-bold text-lg leading-tight mb-1 truncate" title={book.title}>
        {book.title}
      </h3>
      <p className="text-gray-600 text-sm truncate">
        {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
      </p>
      <p className="text-gray-400 text-xs mt-auto pt-2">
        First published: {book.first_publish_year || 'N/A'}
      </p>
    </div>
  );
}