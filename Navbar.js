import React, { useState } from 'react'
import logo from '../images/matrixLabsLogo.png'

const Navbar = () => {

  const [data,setData] = useState(true);

return (
     
<section id='navbar-section'>

  <div className='container'>

  <nav className={data==true ? 'navbar-dropdown' :'navbar-dropdown1'}>
          <ul className='text-align-center'>
              <li><a href='#' className='white-color'>Home</a></li>
              <li><a href='#' className='white-color'>About</a></li>
              <li><a href='#' className='white-color'>Whitepaper</a></li>
              <li><a href='#' className='white-color'>Audit</a></li>
              <li><a href='#' className='white-color'>Telegram</a></li>
              <button className="btn white-color">CONNECT</button> 
              
            </ul>
    </nav>

    <nav className='navbar'>
          <div className='left_div'>
            <img src={logo} alt='Matrix labs' className='logo'/> 
            <h1 className='white-color'>MATRIX LABS</h1>
          </div>
          <i className="fa fa-bars" onClick={()=>{setData(!data)}}></i>
          <div className='right_div'>
           
            <ul>
              <li><a href='#' className='white-color'>Home</a></li>
              <li><a href='#' className='white-color'>About</a></li>
              <li><a href='#' className='white-color'>Whitepaper</a></li>
              <li><a href='#' className='white-color'>Audit</a></li>
              <li><a href='#' className='white-color'>Telegram</a></li>
              
            </ul>
            <button className="btn white-color">CONNECT</button> 
            
          </div>
      </nav>
      
  </div>

</section>
      
  )
}

export default Navbar