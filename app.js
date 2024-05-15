
require('dotenv').config()  
const connectToMongo  = require('./database/mongodb');
const app = require('./server');
(async() => {
  await connectToMongo();
})();

port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})