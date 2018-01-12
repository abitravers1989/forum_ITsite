const express = require('express');
const path = require('path');

// Init App
const app = express();

// Load view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route

app.get('/', (req, res)=> {
  let articles = [
    {
      id:1,
      title:'Article One',
      author:'Abi',
      body:'This is article one'
    },
    {
      id:2,
      title:'Article Two',
      author:'Abi',
      body:'This is article one'
    },
    {
      id:3,
      title:'Article Three',
      author:'Abi',
      body:'This is article one'
    }
  ];
  res.render('index', {
    title:'Articles',
    articles: articles
  });
});

// Add Route

app.get('/articles/add', (req, res)=> {
  res.render('add_article', {
    title:'Add Article'
  });
});

// Start server

app.listen(3000, ()=>{
  console.log('listening on port 3000');
})

// const MongoClient = require('mongodb').MongoClient
//
// MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds247007.mlab.com:47007/dads-forum', (err, database) => {
//   if (err) return console.log(err)
//   let db = database
//   app.listen(3000, () => {
//     console.log('listening on port 3000')
//   });
// });
