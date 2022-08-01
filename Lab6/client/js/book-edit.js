window.onload = function () {
  let url = new URL(location.href);
  const bId = url.searchParams.get("id");
  fetchBookById(bId);
  document.getElementById("edit-button").onclick = function (event) {
    event.preventDefault();
    editBookById(bId);
  };
};

function fetchBookById(id) {
  console.log(id);
  fetch("http://localhost:3000/books/" + id)
    .then((response) => response.json())
    .then((bId) => {
      document.getElementById("title").value = bId.title;
      document.getElementById("ISBN").value = bId.ISBN;
      document.getElementById("publishedDate").value = bId.publishedDate;
      document.getElementById("author").value = bId.author;
    });
}

async function editBookById(id) {
  const response = await fetch("http://localhost:3000/books/" + id, {
    method: "PUT",
    body: JSON.stringify({
      title: document.getElementById("title").value,
      ISBN: document.getElementById("ISBN").value,
      publishedDate: document.getElementById("publishedDate").value,
      author: document.getElementById("author").value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location = "index.html";
  }
}
