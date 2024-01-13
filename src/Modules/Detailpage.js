import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detailpage() {
    let { id } = useParams();
    console.log(id);

    const [svar, sfun] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            console.log(res.data);
            sfun(res.data)
        })
    },[])



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 border shadow p-5'>
                    <h1>Id</h1>
                    <h2>{svar.id}</h2>
                </div>
                <div className='col-6 border shadow p-5'>
                    <h1>title</h1>
                    <h2>{svar.title}</h2>
                    <p>user id {svar.userId}</p>
                    <h3>  {svar.completed === true ? "Yes" : "No"}</h3>
                </div>
            </div>

        </div>
    )
}

export default Detailpage
