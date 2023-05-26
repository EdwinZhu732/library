let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

let myTable = document.querySelector(".table");
function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++){

    }
}

let myForm = document.querySelector("#form");
