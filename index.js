const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Working');
});

app.listen(8081, () => {
  console.log('app listening on port 8081');
});