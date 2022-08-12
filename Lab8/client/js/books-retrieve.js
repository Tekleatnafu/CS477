window.onload = function () {
  fetchBooks();
};

function fetchBooks() {
  fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((books) => displayBooks(books))
    .catch((err) => {
      console.log("inside err");
    });
}

function displayBooks(books) {
  const tbody = document.getElementById("books-table");
  let html = "";
  books.forEach((bok) => {
    html += `
            <tr id="tr${bok._id}">
                <th>${bok._id}</th>
                <td>${bok.title}</td>
                <td>${bok.ISBN}</td>
                <td>${bok.publishedDate}</td>
                <td>${bok.author}</td>
                <td>
                    <button type="button" class="btn btn-primary" onClick="deleteBook('${bok._id}');">DELETE</button> 
                    <button type="button" class="btn btn-primary" onClick="editBook('${bok._id}');">EDIT</button>
                </td>
            </tr>
        `;
  });

  tbody.innerHTML = html;
}

function deleteBook(id) {
  console.log(id);
  fetch("http://localhost:3000/books/" + id, {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
      // location.reload();
      document.getElementById(`tr${id}`).remove();
    })
    .catch((err) => console.log(err));
}

function editProduct(id) {
  window.location = "edit-book.html?id=" + id;
}
