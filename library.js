class Book {
  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }
  //decreases the number of available copies by 1 if book is available to borrow
  borrowBook() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      console.log('This book is now checked out.');
    } else {
      console.log('No available copies of this book.');
    }
  }
  //increases the number of available copies by 1, once book is returned
  returnBook() {
    this.availableCopies++;
    console.log('Thanks for returning the book you borrowed.');
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  // This adds a book to our communityLibrary
  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}"added.`);
  }
  //Removes book with the ISBN from our inventory of the communityLibrary
  removeBook(bookIsbn) {
    let bookCount = this.books.length;
    this.books = this.books.filter((obj) => obj.isbn !== bookIsbn);
    if (this.books.length === bookCount) {
      console.log('This book with the isbn is not available');
    } else {
      console.log(`Book with ISBN ${bookIsbn} removed`);
    }
  }
  //finds book by title
  findBookByTitle(findTitle) {
    let findBook = this.books.find((book) => book.title === findTitle);
    if (findBook) {
      console.log(`"${findBook.title}" is available at this library`);
    } else {
      console.log('Book is not available at this library');
    }
  }
  //list all books in communityLibrary
  listAllBooks() {
    console.log('These are the books that we have at this library:');
    this.books.forEach((book) =>
      console.log(
        `- ${book.title} by ${book.author} (ISBN: ${book.isbn}, Available Copies: ${book.availableCopies})`
      )
    );
  }
}

let usedBook1 = new Book('The Bun and Burger', 'Louis Perkins', 10123, 4);
let usedBook2 = new Book('The Bun and Hot Dog', 'Royal Highpoint', 10456, 2);
let usedBook3 = new Book('The Bun and Chicken', 'Captain Crunch', 10789, 5);
let usedBook4 = new Book('The Bread Slices and Fish', 'Big Tuna', 10112, 6);
const communityLibrary = new Library([]);

// adding books to the library
communityLibrary.addBook(usedBook1);
communityLibrary.addBook(usedBook2);
communityLibrary.addBook(usedBook3);
communityLibrary.addBook(usedBook4);

//books borrowed from the library
usedBook3.borrowBook();
usedBook2.borrowBook();
usedBook1.borrowBook();
usedBook1.returnBook();

//books discontinued from the library
communityLibrary.removeBook(10112);

//Finding books by title ing the library
communityLibrary.findBookByTitle('The Bun and Chicken');

//listing all of the books with quantity in the library
communityLibrary.listAllBooks();
