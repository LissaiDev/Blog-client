import React from "react";
import {formatISO9075} from "date-fns"
import { Link } from "react-router-dom";
const Posts = ({file , title, summary, author, createdAt, _id})=>{

    return (
        <Link to={`post/${_id}`} >
            <div className="row post bg-light mb-5 py-2" >
                <div className="col-md-5 col-11 img text-center mx-auto">
                    <img src={"https://lissaidev-api.onrender.com/uploads/"+file} alt="post" className="img-fluid"/>
                </div>
                <div className="col-md-7 col-11 d-flex text-center align-items-center">
                    <div className="">
                        <h1 className="fw-bold">
                            {title}
                        </h1>
                        <p className="text-muted">
                            <span className="fw-bold" style={{color: "black"}}>
                                {author.username}
                            </span> {formatISO9075(new Date(createdAt))}
                        </p>
                        <p className="lead">
                            {summary}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Posts