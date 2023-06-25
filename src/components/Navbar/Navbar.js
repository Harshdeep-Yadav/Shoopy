import React from 'react'
import './Navbar.css'
import Header from '../Header/Header'
import Topbar from '../Topbar/Topbar'
const Navbar = () => {
  return (
    <>
<Topbar/>
    <div className='main-center'>
        <div class='main-container'>
            <div className="search">
                <input type="text" placeholder='Search by name or email'/>
                <div className="icon"></div>
            </div>
            <div className="filter">
                <div className="content">
                    <p>Filter by</p>
                    <ul className="sub-content">
                       <li className='first active'>Date: Last 90days</li>
                       <li>Type</li>
                       <li>Status</li>
                    </ul>
                </div>
            </div>
            <Header/>
        </div>
    </div>
    </>
  )
}

export default Navbar