// console.log('May Node be with you');
const MongoClient = require('mongodb').MongoClient
let db

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds247007.mlab.com:47007/dads-forum', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on port 3000')
  });
});
