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

const getTranHist = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM transaction3', (error, results) => {
      if (error) {
        reject(error)
      }
      // resolve(results.rows);
      resolve(results.rows);

    })
  }) 
}

const getInventory = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM inventory', (error, results) => {
      if (error) {
        reject(error)
      }
      // resolve(results.rows);
      resolve(results.rows);

    })
  }) 
}



const getItems = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM items', (error, results) => {
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

const createItem = (body) => {
  return new Promise(function(resolve, reject) {
    const { price_amount, name, id } = body
    pool.query('INSERT INTO items (item_id, name, price) VALUES($3, $2, $1) RETURNING *', [price_amount, name, id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new item has been added added: ${results}`)
    })
  })
}

const updateItem = (body) => {
  return new Promise(function(resolve, reject) {
    const { price_amount, item_id } = body
    pool.query('UPDATE items SET price=$1 WHERE item_id=$2 RETURNING *', [price_amount, item_id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`item has been updated: ${results}`)
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

const updateInventory = (body) => {
  return new Promise(function(resolve, reject) {
    const { order_amount , item_id } = body
    pool.query('UPDATE inventory SET curr_inv=$1 WHERE item_id=$2 RETURNING *', [order_amount, item_id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Employee salary has been updated: ${results}`)
    })
  })
}
const getCurrInv = (body) => {
  return new Promise(function(resolve, reject) {
    const {item_id} = body
    console.log('inside db file' + item_id);
    pool.query('SELECT curr_inv FROM inventory WHERE item_id=$1', [item_id], (error, results) => {
      if (error) {
        reject(error)
      }
      // resolve(results.rows);
      resolve(results.rows);

    })
  }) 
}

// const getItemPrice = (body) => {
//   return new Promise(function(resolve, reject) {
//     const {?} = body
//     console.log('inside db file');
//     pool.query('SELECT ? FROM items WHERE ?=$1', [?], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       // resolve(results.rows);
//       resolve(results.rows);

//     })
//   }) 
// }




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
    getTranHist,
    getInventory,
    getItems,
    updateInventory,
    getCurrInv,
    createItem,
    updateItem,
    getItemPrice
}