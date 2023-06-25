import React from 'react'
import "./Topbar.css"
import { FaPaypal } from "react-icons/fa"
import { IoNotificationsSharp } from "react-icons/io5"
import { RiSettings5Fill } from "react-icons/ri"
const Topbar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <span className='icon'>     <FaPaypal /></span>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        Home
                    </li>
                    <li className="topListItem">
                        Finances
                    </li>
                    <li className="topListItem">
                        Send and Request
                    </li>
                    <li className="topListItem">
                        Deals
                    </li>
                    <li className="topListItem">
                        Wallet
                    </li>
                    <li className="topListItem">
                        Activity
                    </li>
                    <li className="topListItem">
                        Help
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <span className='xx'>                <IoNotificationsSharp />
                    <RiSettings5Fill /></span>
                <ul className="topList">

                    <li className="topListItem">
                        LOG OUT
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Topbar