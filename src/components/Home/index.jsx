import React, { useEffect, useState } from "react";
import Posts from "../Partials/Posts";
import "./index.scss"
function Home(){
    const [data, setData] = useState([])
    const fetchData = async()=>{
        const response = await fetch("http://localhost:8080/posts");
        response.json().then((data)=>{
           setData(data);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
            <div className="container">
                {data.map(single=>{
                    return <Posts {...single} key={single._id} />
                })}
            </div>
        </div>
    )
}

export default Home