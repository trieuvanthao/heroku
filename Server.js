// const express = require('express');
// const path = require('path');
// const app = express();
//
// // Serve static files....
// app.use(express.static(__dirname + '/dist/MY_APP_NAME_HERE'));
//
// // Send all requests to index.html
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/MY_APP_NAME_HERE/index.html'));
// });
//
// // default Heroku PORT
// app.listen(process.env.PORT || 3000);
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/heroku/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});
