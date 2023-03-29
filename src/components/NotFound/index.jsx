import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const NotFound= ()=>{
    return(
        <>
            <div className="text-center position-absolute w-100 h-100 left-0 top-0 d-flex justify-content-center align-items-center">
                <div className="notFound flex-grow-1">
                    <p className=" display-1">
                        404!
                    </p>
                    <p className="display-5">
                        A página que busca não existe!
                    </p>
                    <Link to="/" className="btn btn-dark w-100 mt-3 text-light">
                        Voltar
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound