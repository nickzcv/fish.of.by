const express = require('express');
const app = express();
const port = 80;
const domain = 'localhost';

app.use('/', express.static('./build'));
app.set('port', port);
app.listen(app.get('port') || port, function() {
  console.log(`Main application: ${domain}:${app.get('port')}`);
});
