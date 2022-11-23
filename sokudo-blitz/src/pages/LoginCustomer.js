import "./loginCstyle.css"
import React, { useState, useRef } from "react"

  const data = [
    ["david", "123"],
     ["jon", "321"]
  ]

  const Login = () => { 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    var id, pswrd;

    const handleNameChange = event => {
      setName(event.target.value);
      id = event.target.value;
    };

    const handlePwdChange = event => {
      setPassword(event.target.value);
      pswrd = event.target.value;
    };

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    function handleClick() {

    var msg = inputRef1.current.value;
    var pwd = inputRef2.current.value;



    const result = data.find(element => {
      return ((element[0] === msg) && (element[1] === pwd));
    })

    if (typeof(result) !== 'undefined'){
      alert("You're in Database");
      window.location.pathname = "/CustomerGUI/Items";
    }else{
      alert("NOT in Database");
      window.location.pathname = "/CustomerGUI/Items";
    }
    }
  
    
    return (
          <div class="nav1">
            <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
            <h1 class="center">WELCOME TO CABO GRILL</h1>
            Input Customer ID:
            <br/>
            <input ref={inputRef1} type="text" id="name" name="name" onChange={handleNameChange} value={name} /> 
            <input ref={inputRef2} type="text" id="password" name="password" onChange={handlePwdChange} value={password} />
            <button class="list" onClick={handleClick}>Login</button>
            <br/><br/>
            <button class="list" onClick={() => window.location.pathname = "/"}>Return</button>
        </div>
    );
  };
  export default Login;
