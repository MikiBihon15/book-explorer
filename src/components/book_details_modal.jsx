export default function BookDetailsModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full mx-4 relative">
        
        {/* CloseBut */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-1">{book.title}</h2>
        <p className="text-gray-500 mb-6">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </p>

        <div className="mb-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Editions</h4>
          <p className="text-gray-800">{book.edition_count || 'Unknown'}</p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Subjects</h4>
          <div className="flex flex-wrap gap-2">
            {book.subject ? book.subject.slice(0, 5).map((sub, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200">
                {sub}
              </span>
            )) : (
              <span className="text-gray-500 text-sm">No subjects listed</span>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}