export const searchBooks = async (query, category = '') => {
  try {
    let url = 'https://openlibrary.org/search.json?';
    
    
    if (query) {
      url += `q=${encodeURIComponent(query.trim())}`;
      if (category) url += `&subject=${encodeURIComponent(category)}`;
    } 
    
    else if (category) {
      url += `subject=${encodeURIComponent(category)}`;
    } 

    else {
      url += `q=Computer+Science`;
    }
    
    const response = await fetch(url);
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
