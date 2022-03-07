const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = express.Router()
const PORT = 3011
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'TechSierra'

});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.post("/api/insert", (req, res) => {
//     console.log(req.log)
//     const movieName = req.body.movieName
//     const movieReview = req.body.movieReview

//     const sqlInsert =
//         'INSERT INTO movie_reviews(movieName,movieReview)VALUES(?,?)';

//     db.query(sqlInsert, [movieName, movieReview], (err, result) => {

//         if (err) {
//             console.log(err)
//         } else {
//             res.send('values Inserted');
//         }

//     });
// });
app.get("/api/get", (req, res) => {
    const sqlSelect =
        'SELECT* FROM employee'
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }


    });
});

app.listen(PORT, () => {
    console.log("Running on port", PORT)
})