const express = require('express');
const app = express(); // runs express library
const cors = require('cors');
const pool = require('./db');


// middle ware
app.use(cors())
app.use(express.json()); // express.json

// const port = 3001
const port = process.env.PORT || 3001;
url= "";
if (port==3001){
  url= "http://localhost:3001/";
}else{
  url= "https://sokudoblitzbackend.onrender.com/";
}



const db = require('./db')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  db.getEmployees()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/employees', (req, res) => {
  db.createEmployee(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/delete_employee', (req, res) => {
  // console.log("hello");
  // console.log(req.params.id);
  db.deleteEmployee(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.post('/employee_update', (req, res) => {
  db.updateSalary(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getEnvironmentVars', (_, res) => {
  res.json({ ENVIRONMENT: url })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

