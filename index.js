const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dishRouter = require("./routes/dishRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

// Mount the Router so any request coming to /dishes will be handled by dishRouter
app.use("/dishes", dishRouter);

// app.get("/dishes/:dishId", (req, res, next) => {
//   res.end("Will send details of the dish: " + req.params.dishId + " to you!");
// });

// app.post("/dishes/:dishId", (req, res, next) => {
//   res.statusCode = 403;
//   res.end("POST operation not supported on /dishes/" + req.params.dishId);
// });

// app.put("/dishes/:dishId", (req, res, next) => {
//   res.write("Upadting the dish: " + req.params.dishId + "\n");
//   res.end(
//     "Will update the dish: " +
//       req.body.name +
//       " with details: " +
//       req.body.description
//   );
// });

// app.delete("/dishes/:dishId", (req, res, next) => {
//   res.end("Deleting all the dish: " + req.params.dishId);
// });

app.use(express.static(__dirname + "/public"));

// set up server
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

// create server
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
