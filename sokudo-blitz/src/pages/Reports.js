import React, { Component, useState, useEffect, useRef, isValidElement} from 'react';


const temp_data = [];
var obj; var obj_hist; var obj_inv;
var rep_type;
var component;
var dataTable;
var numBtns = [1,2,3,4];
var num = 0;
var sales; var excess; var restock; var combo;
var start; var end;
var inventory_data;


var data = ["hello", "howdy"]
export default function Reports(props) {

    const [reports_data, setReports] = useState(false); //  Report Selection
    const [rep_type, setRepType] = useState({});    //  Report Selection 

    const [startDate, setStartDate] = useState(''); //  Sales Report
    const [endDate, setEndDate] = useState(''); //  Sales Report
    
    const [excessDate, setExcessDate] = useState('');   //  Excess Report

    const [startDateCombo, setStartDateCombo] = useState('');    //  Combo Report
    const [endDateCombo, setEndDateCombo] = useState('')    //  Combo Report

    

    const handleStartChange = event => {    //  On click, Gets Sales Report Start Time
        setStartDate(event.target.value);    start = inputRef1.current.value;
        console.log(start)
    }
    
    const handleEndChange = event => {  //  On click, gets Sales Report End time
        setEndDate(event.target.value);        end = inputRef2.current.value;
        console.log(end)
    }

    const handleExcessDate = event => { //  On click, gets Excess Report Date (for transaction history table)
        setExcessDate(event.target.value);      excessDate = inputRef3.current.value;
        console.log(excess)
    }

    const handleStartChangeCombo = event => {    //  On click, Gets Combo Report Start Time
        setStartDateCombo(event.target.value);    start = inputRef4.current.value;
        console.log(start)
    }
    
    const handleEndChangeCombo = event => {  //  On click, gets Combo Report End time
        setEndDateCombo(event.target.value);        end = inputRef5.current.value;
        console.log(end)
    }

    const inputRef1 = useRef(null); //  Sales Report
    const inputRef2 = useRef(null); //  Sales Report

    const inputRef3 = useRef(null); //  Excess Report

    const inputRef4 = useRef(null); //  Combo Report
    const inputRef5 = useRef(null); //  Combo Report


    const handleType = (type) => {  //  Determines which Report is being requested & calls for that data
        if (type === "sales"){  //  If Requesting Sales Report...
            console.log("Fetching Sales Report Data...")
            fetch('http://localhost:3001/tranHist')
                .then(response => {
                    return response.text(); 
                    })
                .then(data => {
                    setReports(data);
                    });
            obj = JSON.parse(reports_data);

            data = obj.map((val, key) => {
            var itemTime = parseInt(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])  //  Get Order Date
            if((itemTime > startDate) && (itemTime < endDate)){
                console.log(end)
                // console.log("num: " + val.order_number + "1: " + val.order_time[8] + "\t2: " + val.order_time[9] + "\t3: " + (parseInt( val.order_time[8] + val.order_time[9])+5) )                // console.log(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])

            return (
                <div>
                    <table>
                        <tr>
                            <th>Order Number</th>
                            <th>Order ID</th>
                            <th>Order Time</th>
                            <th>Order Cost</th>
                            <th>Order Contents</th>
                        </tr>
                    </table>
                    <tr key={key}>
                        <td>{val.order_number}</td>
                        <td>{val.order_id}</td>
                        <td>{val.order_time}</td>
                        <td>{val.order_cost}</td>
                        <td>{val.order_contents}</td>
                    </tr>
                </div>
            )}else{
                console.log("NO VALID DATA ")
                return false;
            }})
        }else if (type === "excess"){   //  If Requesting Excess Report
            console.log("Fetching Excess Report Data...")

            var temp_hist_data = ["Secondary"]  //  Used to get All Transaction History
            var hist_data = []    //  Used to get filtered Transaction History

            fetch('http://localhost:3001/inventory')    //  Fetch Inventory Data for Current Inventory
                .then(response => {
                    return response.text(); 
                    })
                .then(data => {
                    setReports(data);
                    });
            obj_inv = JSON.parse(reports_data);

            fetch("http://localhost:3001/tranHist") //  Fetch Transaction Data for Items Sold
                    .then(response => {
                        return response.text();
                    })
                    .then(data => {
                        setReports(data);
                    })
            obj_hist = JSON.parse(reports_data);

            //  Filter Data based on input date
            temp_hist_data = obj_hist.map((val, key) => {
                var itemTime = parseInt(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])  //  Get Order Date
                if (itemTime >= excessDate){
                    hist_data.push(val.order_contents)
                }
                
            })

            for(var i = 0; i < hist_data.length(); i++){
                //  Dictionary to go through each order's contents and tally the values of each item type
                //  Collect # of each item sold, Do the math with data from the item's current value (from obj_inv-> val.curr_inv) to determine if its excess
            }
            console.log(hist_data)

            // data = obj_inv.map((val,key) => {
            //     console.log(val.curr_inv)
            // });
            // console.log("Inventory: " + inventory_data);
            
            return (
                <div>EXCESS DATA BB</div>
            )

            // itemData = obj.map((val, key) => {
            // var curInv = parseInt(val.curr_inv);
            // if(curInv > 0){
            //     console.log(end)
            //     // console.log("num: " + val.order_number + "1: " + val.order_time[8] + "\t2: " + val.order_time[9] + "\t3: " + (parseInt( val.order_time[8] + val.order_time[9])+5) )
            //     // console.log(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])
            // return (
            //     <div>
            //         <table>
            //             <tr>
            //                 <th>Order Number</th>
            //                 <th>Order ID</th>
            //                 <th>Order Time</th>
            //                 <th>Order Cost</th>
            //                 <th>Order Contents</th>
            //             </tr>
            //         </table>
            //         <tr key={key}>
            //             <td>{val.order_number}</td>
            //             <td>{val.order_id}</td>
            //             <td>{val.order_time}</td>
            //             <td>{val.order_cost}</td>
            //             <td>{val.order_contents}</td>
            //         </tr>
            //     </div>
            // )}else{
            //     console.log("NO VALID DATA ")
            //     // alert("Correct Date Format: YYYYMMDD")
            //     return false;
            // }})
        }else if (type === "restock"){  //  If Requesting Restock Report
            console.log("ENTERING RESTOCK...")
            fetch('http://localhost:3001/inventory')
                .then(response => {
                    return response.text(); 
                    })
                .then(data => {
                    setReports(data);
                    });
            obj = JSON.parse(reports_data);

            data = obj.map((val,key) => {
                // console.log("Current: " + val.curr_inv + "\tMin: " + val.min_inv)
                if ((val.curr_inv) < (val.min_inv)){
                    return (
                        <div>
                            <table>
                                <tr>
                                    <th>Item</th>
                                    <th>Current Inv</th>
                                    <th>Max Inv</th>
                                    <th>Min Inv</th>
                                </tr>
                            
                            <tr key={key}>
                                <td>{val.item}</td>
                                <td>{val.curr_inv}</td>
                                <td>{val.max_inv}</td>
                                <td>{val.min_inv}</td>
                            </tr></table>
                        </div>
                )}else{
                    console.log("NO VALID DATA ")
                    return false;
                }
            })
        }else if (type === "combo"){    //  If Requesting Combo Report
            console.log("ENTERING COMBO...")
            fetch('http://localhost:3001/tranHist')
                .then(response => {
                    return response.text(); 
                    })
                .then(data => {
                    setReports(data);
                    });
            obj = JSON.parse(reports_data);

            data = obj.map((val, key) => {
                var itemTime = parseInt(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])  //  Get Order Date
                if((itemTime > startDateCombo) && (itemTime < endDateCombo)){
                    console.log(end)
                    // console.log("num: " + val.order_number + "1: " + val.order_time[8] + "\t2: " + val.order_time[9] + "\t3: " + (parseInt( val.order_time[8] + val.order_time[9])+5) )                // console.log(val.order_time[0] + val.order_time[1] + val.order_time[2] + val.order_time[3] + val.order_time[5] + val.order_time[6] + val.order_time[8] + val.order_time[9])
    
                return (
                    <div>
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
                        </tr></table>
                    </div>
                )}else{
                    console.log("NO VALID DATA ")
                    return false;
                }})
        }
        
    }

    const changeRep = (index, type) => {    //  Handles Displaying selected information, changing based on which report
        
    // this will be run for the amount of button you have
        if (!rep_type[index]) {
          setRepType((rep_type) => ({
            ...rep_type,
            [index]: " ",
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
                  [b]: " "
                }), {})
            ),
            [index]: rep_type[index] === " " ? data : " ",
          }));
        };
      };

    //  Left side of Display; Contains all Input Fields and Buttons
    component = <> 
        <div class="column left">
            <div class="row">
            {/* Sales Report */}
                <input ref={inputRef1} id="startDate" type="text" value={startDate} onChange={handleStartChange} placeholder="YYYYMMDD"></input>
                <input ref={inputRef2} id="endDate" type="text" value={endDate} onChange={handleEndChange} placeholder="YYYYMMDD"></input>
                <button id={numBtns[0]} onClick={changeRep(1, "sales")} value={false}>Sales Report</button><br/>
            </div>

            <div class="row">
            {/* Excess Report */}
                <input ref={inputRef3} id="excessDate" type="text" value={excessDate} onChange={handleExcessDate} placeholder="YYYYMMDD"></input>
                <button id={numBtns[1]} onClick={changeRep(2, "excess")} value={false}>Excess Report</button><br/>
            </div>

            <div class="row"> 
            {/* Restock Report */}
                <button id={numBtns[2]} onClick={changeRep(3, "restock")} value={false}>Restock Report</button><br/>
            </div>

            <div class="row">
            {/* Combo Report */}
                <input ref={inputRef4} id="startDateCombo" type="text" value={startDateCombo} onChange={handleStartChangeCombo} placeholder="YYYYMMDD"></input>
                <input ref={inputRef5} id="endDateCombo" type="text" value={endDateCombo} onChange={handleEndChangeCombo} placeholder="YYYYMMDD"></input>
                <button id={numBtns[3]} onClick={changeRep(4, "combo")} value={false}>Combo Report</button>
            </div>
        </div>
    </>

    //  Right side of Display; Contains Tables of Data
    dataTable = <>
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