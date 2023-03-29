import React, { useState } from "react";
const Registro = ()=>{

    const [username, setUsername ]=useState("");
    const [password, setPassword ]=useState("");
    const [errMessageName , setErrMessageName ] = useState(null)
    const [errMessagePassword , setErrMessagePassword] = useState(null)
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        try{
            fetch("http://localhost:8080/register",{
                method: "POST",
                headers : {'Content-Type':'application/json'},
                body: JSON.stringify({username , password})
            }).then(data => data.json())
            .then((obj)=>{
                if(obj.status=== "bad"){
                    obj.errors.forEach((value)=>{
                        if(value.param==='username'){
                            setErrMessageName(value.msg)
                        }else{
                            setErrMessagePassword(value.msg)
                        }
                    })
                }else{
                    setErrMessageName("Conta criada!")
                    setErrMessagePassword(null)
                }
            })
        }catch(e){
            console.log(e)
        }


    }

    return(
        <div className="container mt-5">
            <p className="fs-2 fw-semibold">
                Faça o registro!
            </p>
            <form onSubmit={handleSubmit}>
                <span className="text-danger">
                    {errMessageName}
                </span>
                <div className="form-floating mb-3">
                    <input required type="text" className="form-control" id="username" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="username">Nome de usuário</label>
                </div>
                    <span className="text-danger">
                        {errMessagePassword}
                    </span>
                <div className="form-floating">
                    <input required type="password" className="form-control" id="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                        <label htmlFor="password">Senha</label>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-3 text-light">
                    Registrar
                </button>
            </form>
        </div>
    )
}

export default Registro