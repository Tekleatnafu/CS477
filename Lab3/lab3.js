/**
 1. Create a http server which listens to 3000 port.
 2. The home page “/” which displays an html page with a blog post form: 
		there's a title input, a blog body textarea and a submit button in the form
	3. User enter information, then click “Submit” button
	4. On the server side, grab user's inputs and save into a file.
	5. After saving successfully, display "Save Successfully" page to user 
		 with a link goes back to home page.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      fs.createReadStream(path.join(__dirname, "homepage.html")).pipe(res);
    } else if (req.url === "/homepage" && req.method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const string = Buffer.concat(body).toString();
        console.log(string);
        fs.writeFile("users.txt", string, (err) => {
          if (!err) {
            res.end("save successfully");
          } else {
            res.end("Try again ");
          }
        });
      });
    } else {
      res.end("others... ");
    }
  })
  .listen(3000, () => {
    console.log("Server Running on 3000");
  });
