import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss"
const Post = ()=>{
    const {id} = useParams()
    const [postData, setPostData] = useState([])

    const getPost = async ()=>{
       const response = await fetch(`http://localhost:8080/post/${id}`)
       response.json().then(data => {
        setPostData(data)
       })
    }
    useEffect(()=>{
        getPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <>
            <div className="container">
                <h1 className="fw-bolder text-center">
                    {postData.title}
                </h1>
                <div className="imgpost mb-4">
                    <img src={`http://localhost:8080/uploads/${postData.file}`} alt={postData.title} className="img-fluid"/>
                </div>
                <div className="fs-5" dangerouslySetInnerHTML={{__html:postData.content}} ></div>
            </div>
        </>
    )
}

export default Post