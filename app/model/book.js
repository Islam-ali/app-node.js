exports.book = class Book {
  constructor(bookId , title , description , isbn , publisher , author){
    this.bookId = bookId;
    this.title = title;
    this.description = description;
    this.isbn = isbn;
    this.publisher = publisher;
    this.author = author;
  }
}