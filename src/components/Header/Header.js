import React,{useState} from 'react'
import './Header.css'
const Header = () => {
    const[item,setItem]=useState([
        {
            name:"Name.com.inc",
            price:"-$9.89",
            date:"Jun22 . Automatic Payment"
        },
        {
            name:"Name.com.inc",
            price:"-$8.89",
            date:"Jun22 . Automatic Payment"
        },
        {
            name:"Name.com.inc",
            price:"-$5.89",
            date:"Jun22 . Automatic Payment"
        },
        {
            name:"Name.com.inc",
            price:"-$7.89",
            date:"Jun22 . Automatic Payment"
        },
        {
            name:"Name.com.inc",
            price:"-$5.89",
            date:"Jun22 . Automatic Payment"
        },

    ])
  return (
    <div>
        <div className="header-container">
            <h4>Completed</h4>
            <p>This week</p>
            <div class='list-item'>
               {
                item.map((data)=>{
                    return(
                        <div className="card">
                            <p className='item-name'>{data.name}<span>{data.date}</span></p>
                            <div className='price'>
                            <p className='item-price'>{data.price}</p>
                            </div>
                        </div>
                    )
                })
               }
            </div>
        </div>
    </div>
  )
}

export default Header