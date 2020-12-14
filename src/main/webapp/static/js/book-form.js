const onClick = function(event) {
    event.preventDefault();

    const bookTitleEle = document.getElementById('book-title');
    const bookISBNEle = document.getElementById('book-isbn');
    const bookAuthorEle = document.getElementById('book-author');
    const bookGenreEle = document.getElementById('book-genre');

    if (bookISBNEle.value) {
    
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
        xhr.send();
    } else {
        alert('Please enter a nonblank value for book ISBN!');
    }    
}

const submit = document.getElementById('book-submit');
submit.addEventListener('click', onClick)