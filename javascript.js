let myLibrary = [];
let myTable = document.querySelector(".table");
let myForm = document.querySelector("#form");
let newBook = document.querySelector(".new-book");
let closeForm = document.querySelector(".close-form");
let tableBody = document.querySelector("#tbody");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
    let newRow = document.createElement("tr");
    newRow.dataset.index = myLibrary.length - 1;
    let rowTitle = document.createElement("td");
    rowTitle.textContent = title;
    newRow.appendChild(rowTitle);
    let rowAuthor = document.createElement("td");
    rowAuthor.textContent = author;
    newRow.appendChild(rowAuthor);
    let rowPages = document.createElement("td");
    rowPages.textContent = pages;
    newRow.appendChild(rowPages);
    let rowRead = document.createElement("td");
    rowRead.textContent = read;
    newRow.appendChild(rowRead);
    let rowEdit = document.createElement("td");
    let readButton = document.createElement("button");
    readButton.textContent = "Change Read Status";
    rowEdit.appendChild(readButton);
    newRow.appendChild(rowEdit);
    let rowDelete = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    rowDelete.appendChild(deleteButton);
    newRow.appendChild(rowDelete);
    tableBody.appendChild(newRow);
}

addBookToLibrary("The Hunger Games", "Suzanne Collins", 374, "read");

newBook.addEventListener('click', () => {
    myForm.style.visibility = "visible";
    newBook.style.visibility = "hidden";
    myTable.style.visibility = "hidden";
});

myForm.addEventListener("submit", getData, false);

function getData(event){
    if (event.type === "submit"){
        let formTitle = event.target.title.value;
        let formAuthor = event.target.author.value;
        let formPages = event.target.pages.value;
        let formRead = event.target.read.value;
        addBookToLibrary(formTitle, formAuthor, formPages, formRead);
        console.log(formTitle, formAuthor, formPages, formRead);
    }
    event.preventDefault();
    myForm.style.visibility = "hidden";
    newBook.style.visibility = "visible";
    myTable.style.visibility = "visible";
    event.target.read.value = "not-read";
    event.target.pages.value = "";
    event.target.author.value = "";
    event.target.title.value = "";
}

closeForm.addEventListener("click", () => {
    myForm.style.visibility = "hidden";
    newBook.style.visibility = "visible";
    myTable.style.visibility = "visible";
    myForm.read.value = "not-read";
    myForm.pages.value = "";
    myForm.author.value = "";
    myForm.title.value = "";
}
);

