import React from 'react'
import "./styles.css"
function UserPage({name,email}) {
    let UserName = localStorage.getItem("userName")
    let UserEmail = localStorage.getItem("userEmail")
  return (
    <div className='userPage-container'>
        <div className='Upper'>
            <h3>Account Settings</h3>
        </div>
        <div className='middle'>
            <div className='left'><h3>{UserName[0].toUpperCase()}</h3></div>
            <div className='right'>
                <p>{UserName}</p>
                <p>{UserEmail}</p>
            </div>
        </div>
        <div className='bottom'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

export default UserPage