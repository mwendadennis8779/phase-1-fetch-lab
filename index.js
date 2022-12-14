function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(resposne => resposne.json())
  .then(books => renderBooks(books)) 
}

function renderBooks(books) {
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<p>${book.name}</p>`;
    document.querySelector('main').appendChild(h2)
    
  });
}
renderBooks()
function initialize(){
  fetchBooks()
}
initialize()

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
