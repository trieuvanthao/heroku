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
const express = require('express');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
