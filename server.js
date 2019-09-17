var express = require("express"),
    http = require("http"),
    app = express();

app.use(express.static(__dirname));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);
  console.log('Listening on port 3000');
  console.log('Goto localhost:3000/newsaggregator.html');
