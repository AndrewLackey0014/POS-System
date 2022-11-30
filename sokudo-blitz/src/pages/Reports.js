import React, { Component, useState, useEffect, useRef, isValidElement} from 'react';


const temp_data = [];
var obj;
var rep_type;
var component;
var dataTable;
var numBtns = [1,2,3,4];
var num = 0;
var sales; var excess; var restock; var combo;
var start; var end;


var data = ["hello", "howdy"]
export default function Reports(props) {

    const [reports_data, setReports] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [rep_type, setRepType] = useState({});

    

    const handleStartChange = event => {
        setStartDate(event.target.value);    start = inputRef1.current.value;
        console.log(start)

    }
    
    const handleEndChange = event => {
        setEndDate(event.target.value);        end = inputRef2.current.value;
        console.log(end)

    }

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);


    const handleType = (type) => {
        if (type === "sales"){
            data = ["Sales", "Stuff"]
            fetch('http://localhost:3001/tranHist')
                .then(response => {
                    return response.text(); 
                    })
                .then(data => {
                    setReports(data);
                    });
            obj = JSON.parse(reports_data);
            // console.log("OBJ time: " + obj)
//               if ((Integer.parseInt(start) <= Integer.parseInt(row[3].replaceAll("[^0-9]","").substring(0,8)) && (Integer.parseInt(row[3].replaceAll("[^0-9]","").substring(0,8))) <= Integer.parseInt(end))){    //  If Order time is between start and end times

            data = obj.map((val, key) => {
            var itemTime = parseInt(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])
            if((itemTime > startDate) && (itemTime < endDate)){
                console.log(end)
                // console.log("num: " + val.order_number + "1: " + val.order_time[8] + "\t2: " + val.order_time[9] + "\t3: " + (parseInt( val.order_time[8] + val.order_time[9])+5) )
                // console.log(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])
            return (
                <table>
                    <tr>
                        <th>Order Number</th>
                        <th>Order ID</th>
                        <th>Order Time</th>
                        <th>Order Cost</th>
                        <th>Order Contents</th>
                    </tr>
                    <tr key={key}>
                    <td>{val.order_number}</td>
                    <td>{val.order_id}</td>
                    <td>{val.order_time}</td>
                    <td>{val.order_cost}</td>
                    <td>{val.order_contents}</td>
                    </tr>
                </table>
            )}else{
                console.log("NO VALID DATA ")
                return false;
            }})
        }else if (type === "excess"){
            data = ["Excess", "Things"]
        }
        
    }

    const changeRep = (index, type) => {
        
    // this will be run for the amount of button you have
        if (!rep_type[index]) {
          setRepType((rep_type) => ({
            ...rep_type,
            [index]: "REP",
          }));
        }
    
        // for every onclick, this function will be run
        return () => {
          handleType(type);
          setRepType((rep_type) => ({
            ...(
              Object.keys(rep_type)
                .reduce((a, b) => ({
                  ...a,
                  [b]: "REP"
                }), {})
            ),
            [index]: rep_type[index] === "REP" ? data : "REP",
          }));
        };
      };

    component = <>
        <div class="column left">
            <div class="row">
                <input ref={inputRef1} id="startDate" type="text" value={startDate} onChange={handleStartChange}></input>
                <input ref={inputRef2} id="endDate" type="text" value={endDate} onChange={handleEndChange}></input>
                <button id={numBtns[0]} onClick={changeRep(1, "sales")} value={false}>Sales Report</button><br/>
            </div>

            <div class="row">
                <button id={numBtns[1]} onClick={changeRep(2, "excess")} value={false}>Excess Report</button><br/>
            </div>

            <div class="row">
                <button id={numBtns[2]} onClick={changeRep(3, "restock")} value={false}>Restock Report</button><br/>
            </div>

            <div class="row">
                <button id={numBtns[3]} onClick={changeRep(4, "combo")} value={false}>Combo Report</button>
            </div>
        </div>
    </>

        dataTable = 
        <>
        <div class="column right">
            <div>{rep_type[1]}</div>
            <div>{rep_type[2]}</div>
            <div>{rep_type[3]}</div>
            <div>{rep_type[4]}</div>
        </div>
        </>
    
    return(
        <>
            {component}
            {dataTable}
        </>
        );
}