import React from "react";
import {formatISO9075} from "date-fns"
import { Link } from "react-router-dom";
import {motion } from "framer-motion";
const Posts = ({file , title, summary, author, createdAt, _id})=>{
    console.log(file)
    return (
        <Link to={`post/${_id}`} >
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
            exit={{opacity:0}}
            whileTap={{scale:0.9}}
            className="row post bg-light mb-5 py-2" >
                <div className="col-md-5 col-11 img text-center mx-auto">
                    <img src={"http://192.168.43.70:8080/uploads/"+file} alt="post" className="img-fluid"/>
                </div>
                <div className="col-md-7 col-11 d-flex text-center align-items-center">
                    <div className="">
                        <h1 className="fw-bold">
                            {title}
                        </h1>
                        <p className="text-muted">
                            <span className="fw-bold text-black">
                                {author.username}
                            </span> {formatISO9075(new Date(createdAt))}
                        </p>
                        <p className="lead">
                            {summary}
                        </p>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default Posts