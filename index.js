const express = require('express');
const app = express();

const router = require('./router/routes');
app.use(express.json());


app.use('/', router);
app

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});