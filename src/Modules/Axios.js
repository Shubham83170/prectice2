import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'





function Axios() {

  const [x,y]= useState([])
const mydata = () => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    console.log(res.data);
    y(res.data)
  })
}
  return (
    
    <>
   
      <div className='container'>
        <div className='row'>

          <div className='col-12'>
          <button onClick={mydata}>Mydata</button>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">User Id</th>
                  <th scope="col">completed</th>
                  <th scope="col">Crud</th>
                

                </tr>
              </thead>
              <tbody>
                {
                  x.map((d) => {
                    return (
                      <tr>
                        {/* <th scope="row">{d.sNo}</th> */}
                        <td>{d.id}</td>
                        <td>{d.title}h</td>
                        <td>{d.userId}</td>
                        <td>{d.completed===true ? "yes": "no"}</td> {/* ternary oparator(condition ? "trueoutput" : "falseoutput" ) */}
                        <td>
                          <butto className="btn btn-primary btn-sm me-2">Del</butto>
                          <butto className="btn btn-success btn-sm me-2">Edit</butto>
                          <Link to={`${d.id}`} className="btn btn-danger btn-sm">View</Link>
                        </td>
                      </tr>

                    )

                  }
                  )
                }

              </tbody>
            </table>
          </div>


        </div>

      </div>



     
    </>)
}

export default Axios
