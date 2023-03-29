import React, { useContext } from "react";
import { useState } from "react";
import {Navigate} from "react-router-dom"
import { userContext } from "../../userContext";
const Login = ()=>{
    const [username, setUsername ]=useState("");
    const [password, setPassword ]=useState("");
    const [redirect, setRedirect] = useState(null)
    const {setUserInfo} = useContext(userContext)

    const handleSubmit =async (event)=>{
        event.preventDefault();
        const response =await fetch("http://localhost:8080/login",{
            method:"POST",
            body:JSON.stringify({username, password}),
            headers : {"Content-Type":"application/json"},
            credentials: 'include'
        })
        console.log(response);
        if(response.ok){
            response.json().then(data =>{
                console.log(data);
                setUserInfo(data)
                
            })
            setRedirect(true)
            
        }else{
            setRedirect(false)
        }
    }
    console.log(redirect);
    if(redirect){
        return <Navigate to={"/"}/>
    }
    return(
        <div className="container mt-5">
            <p className="fs-2 fw-semibold">
                Faça o login!
            </p>
            <span className="text-danger">
                {redirect===false ? "Algo correu mal, por favor tente novamente" : null}
            </span>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input required type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} id="username" name="username" placeholder="name@example.com" />
                        <label htmlFor="username">Nome de usuário</label>
                </div>
                <div className="form-floating">
                    <input required type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password" name="password" placeholder="Password" />
                        <label htmlFor="password">Senha</label>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-3 text-light">
                    Autenticar
                </button>
            </form>
        </div>
    )
}

export default Login