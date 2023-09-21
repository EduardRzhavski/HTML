const book1 = {
    name: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    year: 1997
  };
  
  const book2 = {
    name: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    year: 1998
  };

  // 

  const bookUtils = {};

  // 

  const bookUtils = {
    getFirstPublished: function(book1, book2) {
      return book1.year < book2.year ? book1 : book2;
    }
  };

  const firstPublished = bookUtils.getFirstPublished(book1, book2);

console.log("The book first published is:");
console.log(firstPublished);

// 

const bookUtils = {
  getFirstPublished: function(book1, book2) {
    return book1.year < book2.year ? book1 : book2;
  },
  setNewEdition: function(book, editionYear) {
    book.latestEdition = editionYear;
  }
};

bookUtils.setNewEdition(book2, 2000);

console.log("Book with the latest edition:");
console.log(book2);

// 

const bookUtils = {
  getFirstPublished: function(book1, book2) {
    return book1.year < book2.year ? book1 : book2;
  },
  setNewEdition: function(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function(book, language) {
    book.language = language;
  }
};

bookUtils.setLanguage(book2, "English");

console.log("Book with the updated language:");
console.log(book2);

// 

function(book, language, translator) {
  book.translation = {
    language: language,
    translator: translator
  };
}

// 

function(book, name, location) {
  book.publisher = {
    name: name,
    location: location
  };
}

// 

function(book1, book2) {
  if (
    book1.publisher &&
    book2.publisher &&
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
  ) {
    return true;
  }
  return false;
}

console.log("Are book1 and book2 published by the same publisher?");
console.log(bookUtils.isSamePublisher(book1, book2));

console.log("Are book1 and book3 published by the same publisher?");
console.log(bookUtils.isSamePublisher(book1, book3));