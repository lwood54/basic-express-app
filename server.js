const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT || '5000';
app.set('port', port);

// set view engine up as express-handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// set access point to use static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// index.handlebars
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express-React App'
  });
});

app.listen(port, () => {
  console.log('Listening on port 5000!');
});
