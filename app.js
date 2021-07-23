const express = require('express');
const config = require('config');
const app = express();

app.use(express.json());

app.use('/api', require('./v1/routes'));

app.use((error, req, res, _) => {
  // console.log("ERROR : ------------------>", error);
  return res.status(error.status ? error.status : 400).send({
    error: true,
    message: error.message ? error.message : error,
    data: {},
  });
});


app.listen(config.get('PORT'), () => {
  console.log(`Server up and running on ${config.get('PORT')}`);
});