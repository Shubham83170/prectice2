import React from 'react'
const mydata = [
  {
    sNo: 1,
    first: "shubham",
    last: "singh",
    emailId: "shubham123@gmai.com",
    phoneNo: "128388",
  },
  {
    sNo: 1,
    first: "shubham",
    last: "singh",
    emailId: "shubham123@gmai.com",
    phoneNo: "128388",
  },
  {
    sNo: 1,
    first: "shubham",
    last: "singh",
    emailId: "shubham123@gmai.com",
    phoneNo: "128388",
  },
  {
    sNo: 1,
    first: "shubham",
    last: "singh",
    emailId: "shubham123@gmai.com",
    phoneNo: "122324534"
  },
  {
    sNo: 1,
    first: "shubham",
    last: "singh",
    emailId: "shubham123@gmai.com",
    phoneNo: "12435"
  }
];
console.log(mydata);






function Table() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email id</th>
                <th scope="col">PhoneNo</th>
                <th scope="col">Actions</th>


              </tr>
            </thead>
            <tbody>
              {
                mydata.map((d) => {
                  return (
                    <tr>
                      <th scope="row">{d.sNo}</th>
                      <td>{d.first}</td>
                      <td>{d.last}h</td>
                      <td>{d.emailId}</td>
                      <td>{d.phoneNo}</td>
                      <td>
                        <butto className="btn btn-primary btn-sm me-2">Del</butto>
                        <butto className="btn btn-success btn-sm me-2">Edit</butto>
                        <butto className="btn btn-danger btn-sm">View</butto>
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
  )
}

export default Table
