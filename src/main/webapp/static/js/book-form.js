const onClick = function(event) {
    event.preventDefault();

    const bookTitleEle = document.getElementById('book-title');
    const bookISBNEle = document.getElementById('book-isbn');
    const bookAuthorEle = document.getElementById('book-author');
    const bookGenreEle = document.getElementById('book-genre');

    // Truthy and falsy values in javascript ''
    if (bookISBNEle.value) {
        const bookObj = {
            title: bookTitleEle.value,
            author: bookAuthorEle.value,
            genre: bookGenreEle.value,
            isbn: bookISBNEle.value
        }
        console.log(bookObj);
    
        const xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {
                console.log("Book added!");
                window.location.href = 'book-list.html';
            } else if (this.readyState == 4) {
                //alert('Encountered an error when attempting to add a book!');
                window.location.href = 'book-list.html';
            }
        }
    
        xhr.open("POST", "/LibraryServer/servlet.BookServlet?action=/newBook&ISBN=" + bookISBNEle.value + "&author=" + bookAuthorEle.value + "&title=" + bookTitleEle.value + "&genre=" + bookGenreEle.value);
        //xhr.open("POST", "http://localhost:8080/LibraryServer/servlet.BookServlet?action=/newBook&ISBN=" + bookISBNEle.value + "&author=" + bookAuthorEle.value + "&title=" + bookTitleEle.value + "&genre=" + bookGenreEle.value);
       // http://localhost:8080/LibraryServer/servlet.BookServlet?action=/newBook&ISBN=newisbn&author=yasmine&title=mybook&genre=scary
       // xhr.send(JSON.stringify(bookObj));
        xhr.send();
    } else {
        alert('Please enter a nonblank value for book ISBN!');
    }
    
}

const submit = document.getElementById('pirate-submit');

// Event listener
submit.addEventListener('click', onClick)