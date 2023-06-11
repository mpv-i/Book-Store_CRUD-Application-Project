const inform = console.log;
const { writeJSONFile, readJSONFile } = require("./src/helpers");
let books = readJSONFile("./src", "books.json");
const {
  create,
    index,
    show,
    destroy,
    update,
    booksRead,
    shoppingCart,
    shoppingCartTotal,
    showCartItems
} = require("./src/bookFunctions.js");


function run() {
  const action = process.argv[2];
  const book = process.argv[3];
  let books = readJSONFile("src", "books.json");
  let updatedBooks = [];
  let writeToFile = false;
  switch (action) {
    case "index":
        const booksView = index(books);
        inform(booksView);
        break;
    case "create":
        updatedBooks = create(books, book);
        writeToFile = true;
        break;
    case "show":
        const bookView = show(books, book);
        inform(bookView);
        break;
    case "update":
        updatedAvailability = update(books, book, process.argv[4]);
        writeToFile = true;
        break;
    case "destroy":
        updatedBooks = destroy(books, book);
        writeToFile = true;
        break;
    case "booksRead":
        const readBooks = booksRead(books);
        inform(readBooks);
        break;
    case "shoppingCart":
        const cart = shoppingCart(books, bookId);
        inform(cart);
    case "shoppingCartTotal":
        const total = shoppingCartTotal(cart);
        inform(total);
        break;
    case "showCartItems":
        const totalItems = showCartItems(cart);
        inform(totalItems);
    default:
      inform("There was an error.");
  }
  if (writeToFile) {
    writeJSONFile("src", "books.json", updatedBooks);
  }
}
run();


