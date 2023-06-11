const { nanoid } = require("nanoid");
const booksArray = require("../src/books.json");

function create(books, bookTitle) {
    const book = { name: bookTitle, id: nanoid(4) };
    books.push(book);
    return books;
  };


function index(books) {
    return books.map((book) => book.id + " " + book.title).join("\n");
  };

  function show(books, bookID) {
    const book = books.find((book) => book.id === bookID);
    return `${book.id} ${book.title} ${book.genre} ${book.author} ${book.yearPublished} ${book.priceInCents} ${book.inStock}`;
  };

  function destroy(books, bookID) {
    const index = books.findIndex((book) => book.id === bookID);
    if (index > -1) {
      books.splice(index, 1);
      console.log("This book was successfully removed.");
      return books;
    } else {
      console.log("Book not found. No action taken");
      return books;
    }
  };

  function update(books, bookId, updatedAvailability) {
    const index = books.findIndex((book) => book.id === bookId);
    if (index > -1) {
      books[index].id = bookId;
      books[index].inStock = updatedAvailability;
      console.log("Book successfully updated");
      return books;
    } else {
      console.log("Book not found. No action taken");
      return books;
    }
  };

  function booksRead(books){
    let booksRead = [];
    for (let book of books){
      if (book.readIt === true){
        booksRead.push(book.title);
      }
        return booksRead;
    };
  };

  function shoppingCart(books, bookId){
    let shoppingCart = [];
    let addedItems = {};
    for (let book of books){
      if (book.id === bookId){
        addedItems["title"] = book.title;
        addedItems["price"] = book.priceInCents.toFixed();
        shoppingCart.push(addedItems);
      }
      return shoppingCart;
    };
  };

  function shoppingCartTotal(cart){
    let total = 0;
    for (const book of cart) {
      total += book.price
    };
      return total;
  };

  function showCartItems(cart){
    let itemsInCart = cart.length;
    console.log(`You have ${itemsInCart} item(s) in your cart.`);
    console.log(`${shoppingCartTotal()} is your cart total.`);
  };

  module.exports = {
    create,
    index,
    show,
    destroy,
    update,
    booksRead,
    shoppingCart,
    shoppingCartTotal,
    showCartItems
  }