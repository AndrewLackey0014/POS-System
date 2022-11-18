const Pool = require('pg').Pool;

const pool = new Pool({

    host: "csce-315-db.engr.tamu.edu",
    user: "csce315_906_juttu",
    database: "csce315_906_62",
    password: "131000407",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
      }
    
});

const getEmployees = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM employees', (error, results) => {
        if (error) {
          reject(error)
        }
        // resolve(results.rows);
        resolve(results.rows);

      })
    }) 
}

const createEmployee = (body) => {
    return new Promise(function(resolve, reject) {
      const { employeeid, salary, name, managerid, role } = body
      pool.query('INSERT INTO employees (employeeid, salary, name, managerid, role) VALUES($1, $2, $3, $4, $5) RETURNING *', [employeeid, salary, name, managerid, role], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new employee has been added added: ${results}`)
      })
    })
}

const updateSalary = (body) => {
  return new Promise(function(resolve, reject) {
    const { employeeid, salary} = body
    
    pool.query('UPDATE employees SET salary=$2 WHERE employeeid=$1 RETURNING *', [employeeid, salary], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Employee salary has been updated: ${results}`)
    })
  })
}




const deleteEmployee = (body) => {
  return new Promise(function(resolve, reject) {
    const { id } = body
    console.log(id);
    pool.query('DELETE FROM employees WHERE employeeid=$1', [id], (error, results) => {
      
      if (error) {
          console.log(error);
          console.log(results);

          reject(error)
      }
      console.log(results);
      
      resolve(`Employee deleted with ID: ${id}`)
    })
  })
}
  
  module.exports = {
    getEmployees,
    createEmployee,
    deleteEmployee,
    updateSalary,
}