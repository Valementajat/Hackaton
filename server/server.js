const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const db = mysql.createPool({
  host: 'mysql_db',
  user: 'MYSQL_USER',
  password: 'MYSQL_PASSWORD',
  database: 'books'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hi There');
});



app.post('/user/data', (req, res) => {
  const bookName = req.body.setBookName;
  const bookReview = req.body.setReview;
  const insertQuery = 'INSERT INTO books_reviews (book_name, book_review) VALUES (?, ?)';
  db.query(insertQuery, [bookName, bookReview], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(result);
      res.status(200).send('Inserted successfully');
    }
  });
});


app.post("/user/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body)
  // Check if the email is already taken
  const [existingUser] = await db
    .promise()
    .query("SELECT * FROM user WHERE email = ?", [email]);
  if (existingUser.length > 0) {
    return res
      .status(400)
      .json({ message: "User with this email already exists" });
  }

  // Create a new user
  await db
    .promise()
    .query(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
      [name,  email, password]
    );

  // Assuming successful registration, generate a JWT token
  const [newUser] = await db
    .promise()
    .query("SELECT * FROM user WHERE email = ?", [email]);
 
  res.json({
    message: "Account created successfuly",
    name,
    surname,
    email,
    id: newUser[0].id,
  });
})

app.delete('/delete/:Id', (req, res) => {
  const bookId = req.params.Id;
  const deleteQuery = 'DELETE FROM books_reviews WHERE id = ?';
  db.query(deleteQuery, bookId, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Deleted successfully');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
