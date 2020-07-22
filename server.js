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
      "SELECT feed_number, user_id, context, feed_image, likeit, STR_TO_DATE(create_at,'%Y-%m-%d %H:%i:%S') as create_at, STR_TO_DATE(update_at,'%Y-%m-%d g') as update_at FROM SNS.FEED order by create_at desc",
      (err, rows, fields) => {        
        res.send(rows);
        
      }
    )
});

app.get('/api/feed/id', (req, res) => {
  connection.query(
      "select u.user_id, u.profile_image from sns.feed f INNER JOIN sns.user u ON f.user_id = u.user_id order by f.create_at desc",
      (err, rows) => {
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

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));