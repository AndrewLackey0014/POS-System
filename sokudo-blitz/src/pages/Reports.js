import React, { Component, useState, useEffect} from 'react';


const temp_data = [];
var obj;


export default function Reports(props) {

    const [reports_data, setReports] = useState(false);
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');


    // useEffect(() => {
    //     getSalesReport();
    // }, []);

    // const handleStartDate = event => {
    //     setStartDate(event.target.value);
    //     // id = event.target.value;
    //   };
    // const handleEndDate = event => {
    //     setEndDate(event.target.value);
    //     // id = event.target.value;
    // };

   
    function getSalesReport() {
        // var startDate = document.getElementById("userInputBegin").value;
        // var endDate = document.getElementById("userInputEnd").value;

        // console.log(startDate, endDate);
        fetch('http://localhost:3001/tranHist')
            .then(response => {
                return response.text(); 
                })
            .then(data => {
                setReports(data);
                });
    }
    obj = JSON.parse(reports_data);
    // if (startDate) {
    //     // logic to remove items from obj
    // }


    let component;
    switch(obj) {       
        case false:
            component = <>
            <div class="column left">
            <form class="row">
                Begin Time: <input id="userInputBegin" type="text"></input>
                End Time: <input id="userInputEnd" type="text"></input>
                <button onClick={getSalesReport()}>Sales Report</button>   
            </form>    
            

            <form class="row">
                Previous Date: <input type="text"></input>
                <button>Excess Report</button>
            </form>

            <form class="row">
                <button>Restock Report</button>
            </form>

            <form class="row">
                Begin Time: <input type="text"></input>
                End Time: <input type="text"></input>
                <button>Combo Report</button>
            </form>

            </div>
            
            <div class="column right">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
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
            <div class="column left">
            <form class="row">
                Begin Time: <input type="text"></input>
                End Time: <input type="text"></input>
                <button onclick={getSalesReport()}>Sales Report</button>   
            </form>    
            

            <form class="row">
                Previous Date: <input type="text"></input>
                <button>Excess Report</button>
            </form>

            <form class="row">
                <button>Restock Report</button>
            </form>

            <form class="row">
                Begin Time: <input type="text"></input>
                End Time: <input type="text"></input>
                <button>Combo Report</button>
            </form>

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
            
            
            </>


    }

    return(
        <>
            {component}
        </>
        );
}