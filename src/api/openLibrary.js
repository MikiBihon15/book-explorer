export const searchBooks = async (query) => {
  if (!query) return [];
  
  try {
    const formattedQuery = encodeURIComponent(query.trim());
    const response = await fetch(`https://openlibrary.org/search.json?q=${formattedQuery}`);
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};

export const getCoverUrl = (coverId) => {
  if (!coverId) return null;
  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
};
