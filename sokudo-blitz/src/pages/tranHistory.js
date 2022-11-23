
import React, { Component, useState, useEffect} from 'react';


const temp_data = []
var obj;

export default function TranHistory() {
    const [transactionHist, setTranHist] = useState(false);
    useEffect(() => {
        getTranHist();
    }, []);
    function getTranHist() {
        fetch('http://localhost:3001/tranHist')
          .then(response => {
            return response.text();
          })
          .then(data => {
            setTranHist(data);
          });
    }
    obj = JSON.parse(transactionHist);
    
    let component;
    switch (obj) {
        case false:
          component = <>
          <div class="column left">
                <form>Begin Date: <input type="text"></input></form>
                <form>End Date: <input type="text"></input></form>
                <button>Load Selected Data</button>
            </div>
            <div class="column right">
                <table>
                    <tr>
                        <th>Order Number</th>
                        <th>Order ID</th>
                        <th>Order Time</th>
                        <th>Order Cost</th>
                        <th>Order Contents</th>

                    </tr>
                        {temp_data.map((val, key) => {
                        return (
                            <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                            </tr>
                        )
                        })}
                </table>
            </div>
          
          </>
          break
        
        default: 
          component = <>
          <div>

            <div class="column left">
                <form>Begin Date: <input type="text"></input></form>
                <form>End Date: <input type="text"></input></form>
                <button>Load Selected Data</button>
            </div>
            <div class="column">
                <table>
                    <tr>
                    <th>Order Number</th>
                        <th>Order ID</th>
                        <th>Order Time</th>
                        <th>Order Cost</th>
                        <th>Order Contents</th>

                    </tr>
                     
                    {obj.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.order_number}</td>
                        <td>{val.order_id}</td>
                        <td>{val.order_time}</td>
                        <td>{val.order_cost}</td>
                        <td>{val.order_contents}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>  
          </div>
          </>
          break
      }

return(
        <>
    
    {/* <div class="column left">
        <form>Begin Date: <input type="text"></input></form>
        <form>End Date: <input type="text"></input></form>
        <button>Load Selected Data</button>
    </div>
    
    <div class="column right">
        <table>
            <tr>
                <th>Order Number</th>
                <th>Order ID</th>
                <th>Order Time</th>
                <th>Order Cost</th>
                <th>Order Contents</th>
            </tr>
            {temp_data.map((val, key) => {
            return (
                <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                </tr>
            )
            })}
        </table>
    </div> */}
    {component}
    </>
        );
 }