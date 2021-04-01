const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

// setting up view engine & views
app.set('view engine', 'ejs');
app.set('views', './views');

// using assets folder to access js,css etc 
app.use(express.static('./assets'));
// using our routes 
app.use('/', require('./routes'));

// listening on predefined port 
app.listen(port, function (error) {
    if (error) {
        console.log('Error in serving the app --> app.listen(), Details: ', error);
        return;
    }
    console.log(`Server is up and running at port: ${port} !`);
})