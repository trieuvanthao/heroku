const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
// app.use(express.static(__dirname + '/dist/MY_APP_NAME_HERE'));
app.use(express.static(${__dirname}+ '/front-end/dist/'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  // res.sendFile(path.join(__dirname + '/dist/MY_APP_NAME_HERE/index.html'));
  res.sendFile(`./front-end/dist/index.html`);
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
