const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
var bcrypt = require('bcryptjs'); 

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
let cors = require('cors');
app.use(cors());


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
  let sql = "select user_id, nickname, profile_image, introduce from sns.user where user_id=?"
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

app.get('/api/follow/:id', (req, res) => {
  let sql = 'select count(*) as cnt, f.to_user from sns.user u inner join sns.follow f on u.user_id = f.from_user where user_id=?';
  var id = req.params.id;
  connection.query(sql, [id], (err, rows) => {
    res.send(rows);
  })
});

app.get('/api/following/:id', (req, res) => {
  let sql = 'select count(*) as cnt, f.from_user from sns.user u inner join sns.follow f on u.user_id = f.to_user where user_id=?';
  var id = req.params.id;
  connection.query(sql, [id], (err, rows) => {
    res.send(rows);
  })
});


app.use('/image', express.static('./upload'));

app.post('/api/addFeed', upload.single('feed_image'), (req, res) => {
  let sql = 'INSERT INTO sns.feed VALUES (null, ?, ?, ?, 0, now(), null)';
  let user_id = req.body.user_id;
  let context = req.body.context;
  let feed_image = '/image/' + req.file.filename;  
  let params = [user_id, context, feed_image];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
});

app.post('/api/login', (req, res) => {  
  let user_id = req.body.user_id;
  let password = req.body.password;
  let sql = 'SELECT * FROM sns.user WHERE user_id = ? LIMIT 1';

    console.log(req.body.user_id, req.body.password);
    connection.query(sql, [user_id], (err, rows, fields) => {
      if(password === rows[0].password) {
        let session = req.session;
        session.loginInfo = {
          user_id : rows[0].user_id
        };
        
        return res.json({
          loginSuccess: true
        });
      }      
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));