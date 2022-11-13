import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home'>
      {/* <h1>hii</h1> */}
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
    // <h2>hii</h2>
  )
}

export default Home