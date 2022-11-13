import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">JMSCHAT</span>
      <div className="user">
        {/* <img src="../img/add.png" alt="" /> */}
        <img src={currentUser.photoURL} alt="" />
        {/* <span>TONY</span> */}
        <span>{currentUser.displayName}</span>
        {/* <button >logout</button> */}
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar