import React, { useEffect, useState } from 'react';
import '../../App.css';

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const user = window.localStorage.getItem("uname");
        const pass = window.localStorage.getItem("pswrd");
        setUsername(user);
        setPassword(pass);
        if (user === process.env.REACT_APP_ADMIN_USERNAME && pass === process.env.REACT_APP_ADMIN_PASSWORD) {
            setLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("uname", username);
        window.localStorage.setItem("pswrd", password);
    });

    function adminLoggedIn(e){
        if(username !== process.env.REACT_APP_ADMIN_USERNAME || password !== process.env.REACT_APP_ADMIN_PASSWORD){
            alert("Wrong username or password!");
        }
        else{
            alert("Logged in");
            setLoggedIn(true);
            window.location.reload();
        }
        e.preventDefault();
    }

    function adminLogOut(){
        setLoggedIn(false);
        setUsername("");
        setPassword("");
        window.localStorage.removeItem('uname');
        window.localStorage.removeItem('pswrd');
        window.location.reload();
    }

    return(
        <div id="login-modal" >
            {loggedIn ? 
                <div>
                    <h2>Admin is logged in</h2>
                    <span className="close-modal" onClick={closeModal}>&times;</span>
                    <button className="login-button" onClick={adminLogOut}>Log out</button>
                </div>
                :
                <div>
                    <h2>Admin Login</h2>
                    <span className="close-modal" onClick={closeModal}>&times;</span>
                    <form >
                        <input id="username" className="login-input" type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required></input><br />
                        <input id="password" className="login-input" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required></input><br />
                        <button className="login-button" type="submit" onClick={adminLoggedIn}>Log in</button>
                    </form>
                </div>
            }
        </div>
    )
}

function closeModal() {
    document.getElementById('login-modal').style.display = "none";
}