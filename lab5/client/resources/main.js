window.onload = function () {
  getBooks();

  document.getElementById("nav-home").onclick = function (event) {
    event.preventDefault();
    getBooks();
  };

  // add/update product
  document.getElementById("book-btn").onclick = function (event) {
    event.preventDefault();
    if (!document.getElementById("book-btn").dataset.id) {
      addBook();
    } else {
      editBook();
    }
  };
};

async function getBooks() {
  let books = await fetch("http://localhost:3000/books/").then((response) =>
    response.json()
  );
  books.forEach((bok) => renderBook(bok));
}

function renderBook(bok) {
  const div = document.createElement("div");
  div.classList = "col-lg-4";
  div.id = bok.id;
  div.innerHTML = `<svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
	<title>Placeholder</title>
	<rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777"
			dy=".3em">140x140</text>
	</svg>`;

  const h2 = document.createElement("h2");
  h2.textContent = bok.title;

  const isbn = document.createElement("p");
  isbn.textContent = bok.isbn;

  const publishedDate = document.createElement("p");
  publishedDate.textContent = prod.publishedDate;

  const author = document.createElement("p");
  author.textContent = prod.author;

  div.appendChild(h2);
  div.appendChild(isbn);
  div.appendChild(publishedDate);
  div.appendChild(author);

  const actions = document.createElement("p");
  const updateBtn = document.createElement("a");
  updateBtn.classList = "btn btn-secondary";
  updateBtn.textContent = "UPDATE";
  updateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("book-heading").textContent = "Edit Book";
    document.getElementById("title").value = prod.title;
    document.getElementById("isbn").value = prod.isbn;
    document.getElementById("publishedDate").value = prod.publishedDate;
    document.getElementById("author").value = prod.author;
    document.getElementById("book-btn").dataset.id = prod.id;
  });

  const deleteBtn = document.createElement("a");
  deleteBtn.classList = "btn btn-secondary";
  deleteBtn.textContent = "DELETE";
  deleteBtn.addEventListener("click", function (event) {
    event.preventDefault();

    fetch("http://localhost:3000/books/" + bok.id, {
      method: "DELETE",
    }).then((response) => {
      alert("Delete Successfully!");
      div.remove();
    });
  });

  actions.appendChild(updateBtn);
  actions.appendChild(deleteBtn);

  div.appendChild(actions);

  document.getElementById("books").appendChild(div);
}

async function addBook() {
  let result = await fetch("http://localhost:3000/books/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      isbn: document.getElementById("isbn").value,
      publishedDate: document.getElementById("publishedDate").value,
      author: document.getElementById("author").value,
    }),
  }).then((res) => res.json());
  document.getElementById("book-form").reset();
  renderBook(result);
}

function editBook() {
  const bId = document.getElementById("book-btn").dataset.id;
  const title = document.getElementById("title").value;
  const isbn = document.getElementById("isbn").value;
  const publishedDate = document.getElementById("publishedDate").value;
  const author = document.getElementById("author").value;
  fetch("http://localhost:3000/books/" + bId, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      isbn: isbn,
      publishedDate: publishedDate,
      author: author,
    }),
  })
    .then((response) => response.json())
    .then((jsonObj) => {
      const bookDiv = document.getElementById(bId);
      bookDiv.querySelector("h2").textContent = title;
      const paragraphArr = bookDiv.querySelectorAll("p");
      paragraphArr[0].textContent = isbn;
      paragraphArr[1].textContent = publishedDate;
      paragraphArr[2].textContent = author;

      document.getElementById("book-heading").textContent = "Add a new Book";
      document.getElementById("book-btn").dataset.id = "";
      document.getElementById("book-form").reset();
    });
}
