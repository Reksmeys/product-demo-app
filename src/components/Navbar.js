import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  // useNavigate()
  const navigate = useNavigate()
  return (
    <>
        <header class="p-3 text-bg-dark">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link to={"/"} class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
              </Link>

              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <NavLink 
                  to={"/"} 
                  style={({isActive}) => {
                    return isActive ? { color: "red", padding: 10} : { color: 'white', padding: 10}
                  }}
                  class="nav-link p-2 text-secondary">
                    Home
                  </NavLink>
                  </li>
                <li>
                  <NavLink 
                    to={"/data-table"} 
                    style={({isActive}) => {
                      return isActive ? { color: "red", padding: 10} : { color: 'white', padding: 10}
                    }}
                    class="nav-link p-2 text-secondary">
                      Data Table
                    </NavLink>
                </li>
                <li>
                <NavLink 
                    to={"/products"} 
                    style={({isActive}) => {
                      return isActive ? { color: "red", padding: 10} : { color: 'white', padding: 10}
                    }}
                    class="nav-link p-2 text-secondary">
                      Products
                    </NavLink>
                </li>
               
                <li>
                <NavLink 
                    to={"/faq"} 
                    style={({isActive}) => {
                      return isActive ? { color: "red", padding: 10} : { color: 'white', padding: 10}
                    }}
                    class="nav-link p-2 text-secondary">
                      FAQ
                    </NavLink>
                  </li>
                <li>
                <NavLink 
                    to={"/about"} 
                    style={({isActive}) => {
                      return isActive ? { color: "red", padding: 10} : { color: 'white', padding: 10}
                    }}
                    class="nav-link p-2 text-secondary">
                      Abouts
                    </NavLink>
                </li>

              </ul>

          

              <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                
              </div>
            </div>
          </div>
        </header>
    </>
  )
}
