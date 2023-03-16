const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = require('./router/routes');
app.use(express.json());


app.use('/', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
module.exports.handler = serverless(app);