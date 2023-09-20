const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    publishingYear: 1997,
    genre: "Fantasy",
    pageCount: 223
  };
  
  function getBookDescription(book) {
    return `The book ${book.title} was written by ${book.author} in the year ${book.publishingYear}.`;
  }
  
  const description = getBookDescription(book);
  
  console.log(description);