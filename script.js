const myLibrary = [];

function Book(title, author, page, read) {

  this.title = title;
  this.author = author;
  this.page = page,
  this.read = false
};

function addBook() {

  let newBook = Object.create(Book);

}
