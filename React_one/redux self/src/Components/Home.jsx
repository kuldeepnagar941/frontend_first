import React from 'react'
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
         <header>
      <nav>
        <ul>
          {/* <li><Link to={'/'}>Home</Link></li> */}
          <li><Link to={'/Counter'}>Counter</Link></li>
          <li><Link to={'/Theme'}>Theme</Link></li>
          <li><Link to={'/User'}>User</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Home