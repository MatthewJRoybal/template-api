const express = require('express');
const app = express();

/**
 * CORS Config
 */
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
  res.header('Access-Control-Expose-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

module.exports = new Promise( (resolve, reject) => {
  app.listen(process.env.PORT, (error) => {
    if(error) {
      console.log('server has error');
      return reject(error);
    }
    console.log('server started');
    resolve();
  });
})

