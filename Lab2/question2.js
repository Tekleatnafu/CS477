/*
Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways)
 */
const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    //response.end(fs.readFileSync("./hawassa.webp"));

    // fs.readFile("hawassa.webp", function (err, data) {
    // if (err) {
    // response.end("Ohh, Error Occured");
    // }
    // response.end(data);
    // });

    fs.createReadStream("hawassa.webp").pipe(response);
  })
  .listen(3000, () => {
    console.log("Running on 3000");
  });
