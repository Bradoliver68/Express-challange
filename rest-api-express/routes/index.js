const express = require('express')
const router = express.Router()
//const app = express();

const fs = require('fs')

const students = JSON.parse(fs.readFileSync("students.json"));

// GET student - returns a list of all students
router.get('/', (req, res) => {
  if (req.query.name){
    const selectedStudent = students.find(student => student.name === req.query.name)
    res.send(selectedStudent)
  }  
  else {
    res.send(students)
  }
}) 

router.get('/:id', (req, res) => {
  const selectedStudent = students.find(student => student.id === Number(req.params.id))
  res.send(selectedStudent)
})

router.get('/:id', (req,res) => {
  const selectedStudent = students.find(student => student.id === Number(req.params.id))
  res.send(selectedStudent.grade)
});

router.post('/', (req,res) => {
  if(req.body.grade && req.body.studentId){
    res.status(200).send('Great');
  }
})

module.exports = router










// Return details of a specific student by id 
/*const student = JSON.parse(fs.readFileSync("student.JSON"))
app.get('/students/:studentid', (req, res) => res.send(students[req.params.studentid]))


// Returns a list of students filtered on name matching the given query
app.get('/students?search=', (req, res) => res.send(students[req.params[0]]))


// Return all grades for a given student by student id
app.get('grades/:studentid', (req, res) => res.send(grades[req.params.studentid]))


// Records a new grade and returns success status in JSON response
app.post('/grades/:studentid', function (req, res, next) {
    if(!req.query.grade || !req.query.studentid)
    {
        res.format({
            json: function () {
                res.status(400).send({error: "Correct parameters not supplied!"})
            }
        })
    }
    else
    {
        res.format({
            json: function () {
                res.status(200).send("Grade posted successfully!")
            }
        })
    }
})


// Creates a new user, returns success status in JSON response
app.post('/register', function (req, res, next) {
    if(!req.query.email || !req.query.username)
    {
        res.format({
            json: function () {
                res.status(400).send({error: "COrrect parameters not supplied"})
            }
        })
    }
    else
    {
        res.format({
            json: function () {
                res.status(200).send("Registered successfully!")
            }
        })
    }
})*/