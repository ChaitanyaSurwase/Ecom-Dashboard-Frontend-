import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")

        }
    }, [])
    const handleLogin = async () => {
        let result = await fetch("http://localhost:4000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        result = await result.json()
        console.warn(result)
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result))
            navigate("/")
        } else {
            alert("Please insert correct details")
        }
    }


    return (
        <div className="register">
            <h1>Login</h1>

            <input className="inputBox" type="text" placeholder="Enter Name" value={email}
                onChange={(e) => setEmail(e.target.value)}

            />
            <input className="inputBox" type="password" placeholder="Enter Password" value={password}
                onChange={(e) => setPassword(e.target.value)}

            />
            <button onClick={handleLogin} className="appButton" >Login</button>
        </div>
    )
}

export default Login