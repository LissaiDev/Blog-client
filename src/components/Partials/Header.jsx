import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../userContext";
function Header(){
    const {userInfo, setUserInfo}=useContext(userContext)
    useEffect(()=>{
        try{
            fetch("https://lissaidev-api.onrender.com/profile",{
                credentials: "include"
            })
            .then(data => data.json())
            .then(response=> {
                if(response){
                    setUserInfo(response)
                }else{
                    setUserInfo(null)
                }
            })
        }catch(e){
            console.log(e);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const logout= (event)=>{
        event.preventDefault()
        fetch("https://lissaidev-api.onrender.com/logout",{
            credentials:"include",
            method: "POST"
        })
        setUserInfo(null)
    }
    return(
        <nav className="navbar navbar-expand-sm bg-body-tertiary mb-3">
            <div className="container">
                <a className="navbar-brand " href="/">
                    <span className="fw-bold fs-3">
                        LISSAI
                    </span>DEVELOPER
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <i className="bi bi-chevron-compact-down fs-1"></i>
                </button>
                <div className="collapse navbar-collapse " id="navbar">
                    <ul className="navbar-nav ms-auto">
                       {!userInfo ? 
                       <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro">
                                Registro
                            </Link>
                        </li>
                       </> :
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">
                                Criar post
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={logout} >
                                Sair
                            </a>
                        </li>
                       </>}
                        
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default Header