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
  url= "http://localhost:3000";
}else{
  url= "https://csce315-906-62.onrender.com";
}


const db = require('./db')

app.use(express.json())
app.use(function (req, res, next) {
 // const allowedOrigins = ['http://localhost:8020', 'https://csce315-906-62.onrender.com'];
  //const origin= req.headers.origin;

  res.setHeader('Access-Control-Allow-Origin', url);
  //res.setHeader('Access-Control-Allow-Origin', 'https://csce315-906-62.onrender.com');

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

app.get('/tranHist', (req, res) => {
  db.getTranHist()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.get('/inventory', (req, res) => {
  db.getInventory()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })  
})


app.get('/items', (req, res) => {
  db.getItems()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.get('/get_employees', (req, res) => {
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


app.post('/inventory_update', (req, res) => {
  db.updateInventory(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/curr_inv', (req, res) => {
  console.log('inside the router');
  db.getCurrInv(req.body)
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

