function displayReadBooks(library) {
    for (const book of library) {
      if (book.readingStatus) {
        console.log(`Book Name: ${book.title}`);
        console.log(`Author Name: ${book.author}`);
        console.log(`Reading Status: ${book.readingStatus}`);
        console.log('_________________________________');
      }
    }
  }
  
  const library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false
    }
  ];
  
  displayReadBooks(library);
  