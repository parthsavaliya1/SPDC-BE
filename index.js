const express = require('express');
const cors = require('cors');
require('dotenv').config();

require('./config/database.config')

const categoryRoute= require('./routes/category.route');
const productRoute = require('./routes/product.route');

const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use('/api/category',categoryRoute);
app.use('/api/product',productRoute);



app.listen(PORT, () => {
    console.log('Server running on port no',PORT)
})