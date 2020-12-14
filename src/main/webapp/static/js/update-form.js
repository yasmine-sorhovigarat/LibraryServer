document.getElementById("book-author").value = localStorage.getItem("bookAuthor");
document.getElementById("book-title").value = localStorage.getItem("bookTitle");
document.getElementById("book-genre").value = localStorage.getItem("bookGenre");
document.getElementById("book-isbn").value = localStorage.getItem("bookISBN");


const onClick = function(event) {
    event.preventDefault();
    let author = document.getElementById("book-author").value;
    let title = document.getElementById("book-title").value;
    let genre = document.getElementById("book-genre").value;
    let isbn = document.getElementById("book-isbn").value;

  
        const xhr = new XMLHttpRequest();
    
        // xhr.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 201) {
        //         console.log("Book added!");
        //         window.location.href = 'book-list.html';
        //     } else if (this.readyState == 4) {
        //         //alert('Encountered an error when attempting to add a book!');
        //         window.location.href = 'book-list.html';
        //     }
        // }
    
        xhr.open("PUT", "/LibraryServer/servlet.BookServlet?ISBN=" + isbn + "&author=" + author + "&title=" + title + "&genre=" + genre);
        //xhr.open("PUT", "http://localhost:8080/LibraryServer/servlet.BookServlet?ISBN=" + isbn + "&author=" + author + "&title=" + title + "&genre=" + genre);
       // http://localhost:8080/LibraryServer/servlet.BookServlet?action=/newBook&ISBN=newisbn&author=yasmine&title=mybook&genre=scary
       // xhr.send(JSON.stringify(bookObj));
        xhr.send();
        alert("Book updated");
        window.location.href = 'book-list.html';
    }     


    const onCancelBook = function(event) {
        event.preventDefault();
            //alert("cancel button pressed");
            window.location.href = 'book-list.html';
        }  


const update = document.getElementById('book-update');
const cancel = document.getElementById('book-cancel');

// Event listener
update.addEventListener('click', onClick)
cancel.addEventListener('click', onCancelBook);