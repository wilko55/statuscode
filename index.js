
const express = require('express');
const app = express();
const cors = require('cors');
const port = 4100;

app.get('/:code?', cors(), (req, res) => {
  const statusCode = Number(req.params.code) || 200;
  res.sendStatus(statusCode);
})

app.listen(port, () => {
  console.log(`Status code app http://localhost:${port}`)
})
