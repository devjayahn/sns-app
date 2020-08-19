const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,  
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'})

app.get('/api/feed', (req, res) => {
    connection.query(
      "select u.user_id, u.profile_image, f.feed_number, f.context, f.feed_image, f.likeit, f.create_at from sns.feed f INNER JOIN sns.user u ON f.user_id = u.user_id order by f.create_at desc",
      (err, rows, fields) => {        
        res.send(rows);
        
      }
    )
});

app.get('/api/:id', (req, res) => {
  let sql = 'SELECT * FROM SNS.USER WHERE user_id = ?';
  var id = req.params.id;  
  connection.query(sql, [id], (err, rows) => {
    res.send(rows);
  })
});

app.get('/api/feed/:id', (req, res) => {
  let sql = 'select u.user_id, u.profile_image, f.feed_number, f.context, f.feed_image, f.likeit, f.create_at from sns.feed f INNER JOIN sns.user u ON f.user_id = u.user_id where f.user_id=? order by f.create_at desc';
  var id = req.params.id;  
  connection.query(sql, [id], (err, rows) => {
    res.send(rows);
  })
});

app.get('/api/profile/:id', (req, res) => {
  let sql = "select u.user_id, u.nickname, u.profile_image, u.introduce, f.from_user, f.to_user from sns.user u inner join sns.follow f on u.user_id = f.from_user or u.user_id = f.to_user where user_id=?"
  var id = req.params.id;
  connection.query(sql, [id], (err, rows) => {
    res.send(rows);
  })
});

app.get('/api/getPost/:id', (req, res) => {
  let sql = "select * from sns.feed where user_id = ? order by create_at desc";
  var id = req.params.id;
  connection.query(sql, [id], (err, rows) => {
    res.send(rows);
  })
});

app.use('/image', express.static('./upload'));

app.post('/api/addFeed', upload.single('feed_image'), (req, res) => {
  let sql = 'INSERT INTO sns.feed VALUES (null, ?, ?, ?, null, now(), null)';
  let user_id = req.body.user_id;
  let context = req.body.context;
  let feed_image = '/image/' + req.file.filename;  
  let params = [user_id, context, feed_image];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
});

app.post('/api/login', (req, res) => {
  let sql = "select password from sns.user where user_id=?"
  let user_id = req.body.user_id;
  
})

app.listen(port, () => console.log(`Listening on port ${port}`));