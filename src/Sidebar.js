import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div class="flex-shrink-0 p-3 bg-white" >
    <Link to="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
     
      <span class="fs-5 fw-semibold">Collapsible</span>
    </Link>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Mobile
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="mypurchage" class="link-dark rounded">purchage</Link></li>
            <li><Link to="myrepear" class="link-dark rounded">repeare</Link></li>
            <li><Link to="mychange" class="link-dark rounded">change</Link></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
        Laptop
        </button>
        <div class="collapse show" id="dashboard-collapse" >
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="mybuy" class="link-dark rounded">Buy</Link></li>
            <li><Link to="mylaptoprepear" class="link-dark rounded">Repear</Link></li>
            <li><Link to="#" class="link-dark rounded">Monthly</Link></li>
            <li><Link to="#" class="link-dark rounded">Annually</Link></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
          Orders
        </button>
        <div class="collapse show" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" class="link-dark rounded">New</Link></li>
            <li><Link to="#" class="link-dark rounded">Processed</Link></li>
            <li><Link to="#" class="link-dark rounded">Shipped</Link></li>
            <li><Link to="#" class="link-dark rounded">Returned</Link></li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="#" class="link-dark rounded">New...</Link></li>
            <li><Link to="#" class="link-dark rounded">Profile</Link></li>
            <li><Link to="#" class="link-dark rounded">Settings</Link></li>
            <li><Link to="#" class="link-dark rounded">Sign out</Link></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar
