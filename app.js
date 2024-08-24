const express = require('express');
const routes = require('./routes/router');
const itemRoutes = require('./routes/itemRoutes');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 8080 ;
const uri = process.env.DB_URI;
// database connection initialization
mongoose.connect(uri);
mongoose.connection.once('open',()=>{
    console.log('Database connected successfully...');
    app.listen(port,()=>{
        console.log("App listens for requests on port:", port);
    });
}).on("error",(error)=>{
    console.log(error.message);
});

//middleware initialization
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/products', routes);
app.use('/products',itemRoutes);
app.set('view engine','ejs');
app.set('views','views');