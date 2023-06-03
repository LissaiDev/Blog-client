import React, { useEffect, useState } from "react";
import Posts from "../Partials/Posts";
import "./index.scss";
import Lootie from "lottie-react";
import loading from "../../animations/loading.json"
function Home(){
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const fetchData = async()=>{
        const response = await fetch("http://192.168.43.70:8080/posts");
        response.json().then((data)=>{
           setData(data);
        })
        setLoad(false);
        console.log("Hi");

    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
            {load ? <div className="animation">
                <Lootie animationData={loading} loop={true} autoplay={true} style={{width: 100}}/>
            </div> : <div className="container">
                                {data.map(single=>{
                    return <Posts {...single} key={single._id} />
                })}
            </div>}
            


            
        </div>
    )
}

export default Home