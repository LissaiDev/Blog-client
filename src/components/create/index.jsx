import React, { useState } from "react";
import "./index.scss"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Navigate } from "react-router-dom";

export const Create = ()=>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [summary,setSummary] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false)
    const [status, setStatus] = useState(null)

    const createPost = async(ev)=>{
        ev.preventDefault();
        const data = new FormData();
        
        data.set("title", title)
        data.set("summary", summary)
        data.set("content", content)
        data.set("file", files[0]);
        const response = await fetch("http://localhost:8080/createPost",{
            method:"POST",
            body: data,
            credentials: "include"

        })
        if(response.ok){
            setRedirect(true);
        }else{
            setStatus("Algo correu mal. Tente logar novamente!")
        }
    }
    if(redirect){
        return <Navigate to="/"/>
    }

    return(
        <div className="container">
            {status && <span className="danger">{status}</span>}
            <form onSubmit={createPost}>
                <label htmlFor="title">Escreva seu título: </label>
                <input type="text" placeholder="Título"  value={title} onChange={ev=>setTitle(ev.target.value)} />

                <label htmlFor="summary">Escreva seu resumo: </label>
                <input type="text" placeholder="Resumo"  value={summary} onChange={ev=>setSummary(ev.target.value)} />

                <label htmlFor="image">Escolha sua imagem: </label>
                <input type="file" onChange={ev => setFiles(ev.target.files)} />

                <ReactQuill value={content} onChange={newValue => setContent(newValue)} />
                <button type="submit" className="btn btn-dark w-100 mt-3 text-light">
                    Criar postagem
                </button>
            </form>
        </div>
    )
}

