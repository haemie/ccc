const express = require('express'); // using express
const app = express(); // defining  app
const path = require('path'); // lets us use path.join()/path.resolve()
const apiRouter = require('./routes/api.js') // gives access to methods at routes/api

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use(express.json()); // parse incoming json into objects
app.use(express.urlencoded({ extended: true })); // idk
app.use(express.static(path.resolve(__dirname, "../client"))); // serve whatever's in the client folder, index.js default 
app.use('/api', apiRouter); // fetch requests to /api go to apiRouter methods

app.use((req, res) => res.status(404).send('page unavailable')); // fetch requests to anything else are 404

app.use((err, req, res, next) => { // global error handler
  const defaultErr = { // default error object
    log: 'uncaught middleware error',
    status: 400,
    message: {err: 'operation failed due to unknown error'}
  }
  const errObj = Object.assign({}, defaultErr, err); // make new errorObj combining defaultErr with incoming err
  console.log(errObj.log); // log new error
  return res.status(errObj.status).json(errObj.message); // return new error
});

app.listen(3200); //listens on port 3000 -> http://localhost:3000/

module.exports = app;