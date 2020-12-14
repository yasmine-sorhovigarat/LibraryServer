const placeBook = function(isbn, title, author, genre, checkedOut, outID) {
    const tableBody = document.getElementById('book-table-data');

    const entry = document.createElement('tr');

    entry.innerHTML = 
    `<td>${isbn}</td>
    <td>${title}</td>
    <td>${author}</td>
    <td>${genre}</td>
    <td>${checkedOut}</td>
    <td>${outID}</td>
    <td> <button type="button" onClick="updateRow(this)">edit</button> </td>
    <td> <button type="button" onClick="deleteRow(this)">X</button> </td>`;

    tableBody.appendChild(entry);
}

function updateRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    let bookISBN = getElementByXpath("/html/body/div[1]/section/table/tbody/tr[" + i + "]/td[1]").innerHTML;
    let bookTitle = getElementByXpath("/html/body/div[1]/section/table/tbody/tr[" + i + "]/td[2]").innerHTML;
    let bookAuthor = getElementByXpath("/html/body/div[1]/section/table/tbody/tr[" + i + "]/td[3]").innerHTML;
    let bookGenre = getElementByXpath("/html/body/div[1]/section/table/tbody/tr[" + i + "]/td[4]").innerHTML;
    localStorage.setItem("bookISBN", bookISBN);
    localStorage.setItem("bookTitle", bookTitle);
    localStorage.setItem("bookAuthor", bookAuthor);
    localStorage.setItem("bookGenre", bookGenre);
    window.location.href = 'update-form.html';
    //alert("TRYING TO DELETE " + bookISBN);
    //deleteBook(bookISBN);
    //document.getElementById("myTable").deleteRow(i);
    //alert("The button was clicked and this is the index: " + tableOfBooks);


  }

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    let bookISBN = getElementByXpath("/html/body/div[1]/section/table/tbody/tr[" + i + "]/td[1]").innerHTML;
    //alert("TRYING TO DELETE " + bookISBN);
    deleteBook(bookISBN);
    //document.getElementById("myTable").deleteRow(i);
    //alert("The button was clicked and this is the index: " + tableOfBooks);

  }

  function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

  function deleteBook(isbn){
    //alert("WE ARE on THE top deleteBook function with " + isbn);
    const xhr = new XMLHttpRequest();

    //xhr.open('POST', 'http://localhost:8080/LibraryServer/servlet.BookServlet?action=/deleteBook&ISBN=' + isbn);
    xhr.open('POST', '/LibraryServer/servlet.BookServlet?action=/deleteBook&ISBN=' + isbn);
    xhr.send();
    alert(isbn + " has been deleted");
    location.reload();
  }

const getBooks = function() {
    const xhr = new XMLHttpRequest();

    // There are essentially 5 different ready states
    // 0: Unsent
    // 1: Opened
    // 2: Headers_received
    // 3: Loading
    // 4: Done
    xhr.onreadystatechange = function() {
        // console.log("below is hopefully response text");
        // console.log(xhr.responseText);
        // console.log("below is hopefully json parse text");
        // console.log(JSON.parse(xhr.responseText));
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhr.responseText);
          xhr.getResponseHeader("Access-Control-Allow-Origin", "*");
            for (let i = 0; i < data.length; i++) {
                placeBook(data[i].isbn, data[i].title, data[i].author, data[i].genre, data[i].checkedOut, data[i].outID);
            }

            //console.log("Book data received");
        }
    }
    xhr.status = 200;
    //xhr.open('GET', 'http://localhost:8080/LibraryServer/servlet.BookServlet?action=/showAll');
    xhr.open('GET', '/LibraryServer/servlet.BookServlet?action=/showAll');
    xhr.send();
}

getBooks();
console.log("Hi there!");
