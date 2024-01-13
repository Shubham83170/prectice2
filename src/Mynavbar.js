import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Mynavbar() {

  const { register, handleSubmit,   formState: { errors }, } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="myabout">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="mytable">Table</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="myservice">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="myprops">Props</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="myaxios">Axios</Link>
              </li>


            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <button className="btn btn-primary ms-2" type="button" data-bs-toggle="modal" data-bs-target="#login">Login</button>
              <button className="btn btn-success ms-2" type="button" data-bs-toggle="modal" data-bs-target="#registor">Registor</button>
            </form>
          </div>
        </div>

      </nav>


      {/* =========================================MODAL=========================== */}


      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal fade" id="login"  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 ms-auto " id="exampleModalLabel">User Login Page</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-12'>
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className='col-12'>
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cencel</button>
                <button type="button" className="btn btn-success">Login</button>
              </div>
            </div>
          </div>
        </div>



        <div className="modal fade" id="registor"  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 ms-auto " id="exampleModalLabel">User Registor Page</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-6'>
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control"  {...register("firstname", { required: true })} />
                      {errors.firstname && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className='col-6'>
                      <label className="form-label">Last name</label>
                      <input type="text" className="form-control" {...register("lastname")} />
                    </div>

                    <div className='col-6'>
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control"  {...register("email")} />
                    </div>
                    <div className='col-6'>
                      <label className="form-label">Phone Number</label>
                      <input type="text" className="form-control" {...register("phonenumber")} />
                    </div>

                    <div className='col-6'>
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" {...register("password")} />
                    </div>
                    <div className='col-6'>
                      <label className="form-label">Confirm Password</label>
                      <input type="text" className="form-control" {...register("confirmpassword")} />
                    </div>

                    <div className='col-12'>
                      <label className="form-label">Address</label>
                      <textarea className="form-control" value="" {...register("address")}>type comment here</textarea>
                    </div>

                    <div className='col-12'><h3>Gender</h3></div>
                  </div>


                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" {...register("male")} />
                    <label className="form-check-label" >Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" {...register("female")} />
                    <label className="form-check-label" >Female</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" {...register("Other")} />
                    <label className="form-check-label" >Other</label>
                  </div>


                </div>
              </div>

              <div className="modal-footer justify-content-center">
                {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cencel</button> */}
                <button type="submit" className="btn btn-success">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Mynavbar
