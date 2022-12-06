
import React, { Component, useState, useEffect, useRef } from 'react';


const temp_data = []
var obj;
var customTranRange = 0;



function getCurrentURL () {
  return window.location.href
}


export default function TranHistory() {

  const url = getCurrentURL()
  var backend_url = "";
  // console.log(url);
  if (url.substring(0,21) == 'http://localhost:3000') {
    backend_url = 'http://localhost:3001/';
  }
  else {
    backend_url = 'https://sokudoblitzbackend.onrender.com/';
  }

    const [transactionHist, setTranHist] = useState(false);
    const [thStartDate, setTHStartDate] = useState('');
    const [thEndDate, setTHEndDate] = useState('')

    // useEffect(() => {
    //     getTranHist();
    // }, []);
    function getTranHist() {
        fetch('http://localhost:3001/tranHist')
          .then(response => {
            return response.text();
          })
          .then(data => {
            if (inputRef1.current.value && inputRef2.current.value)  {
              console.log(data)
              var item = JSON.parse(data);
              var final_item = [];
              for (const [key, value] of Object.entries(item)) {
                if (value['order_time'] >= (inputRef1.current.value +'T00:00:00.000Z') && value['order_time'] <= (inputRef2.current.value + 'T23:49:59.000Z')) {
                  final_item.push(value);
                }
              };
              data = JSON.stringify(final_item);
              console.log(data)
            }
            setTranHist(data);
          });
    }

 
    obj = JSON.parse(transactionHist);
    

    const handleTHStartDate = event => {
      setTHStartDate(event.target.value);
    };

    const handleTHEndDate = event => {
      setTHEndDate(event.target.value);

    };



    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    
    let component;
    switch (obj) {
        case false:
          component = <>
          <div class="column left">
                <div class="row">
                    Begin Date: <input ref={inputRef1} onChange={handleTHStartDate} type="text" value={thStartDate}></input>
                    End Date: <input ref={inputRef2} onChange={handleTHEndDate} type="text" value={thEndDate}></input>
                    <button onClick={getTranHist}>Load Selected Data</button>
                </div>
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
                <div class="row">
                    Begin Date: <input ref={inputRef1} onChange={handleTHStartDate} type="text" value={thStartDate}></input>
                    End Date: <input ref={inputRef2} onChange={handleTHEndDate} type="text" value={thEndDate}></input>
                    <button onClick={getTranHist  }>Load Selected Data</button>
                </div> 
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
        {component}
    </>
        );
 }