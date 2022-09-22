const express = require('express');
const app = express();
const port = 5000;

const products = require('./products')

app.use(express.static('public'));
app.use('/products', products);

app.listen(port, () => {
  console.log(`🔥 Server is running on port: ${port}`);
})