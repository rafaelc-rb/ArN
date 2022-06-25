import React from 'react'
import './styles.css'
import logo from '../../Assets/Img/logo.png'
import { Navbar } from 'react-bootstrap'
import { FaRegCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-background'>
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt='logo'
          width='250px'
        />
      </Navbar.Brand>

      <div className='footer-body'>
        HERE GOES THE FOOTER BODY
      </div>

      <div className='copyright'>
        <FaRegCopyright className='copyright-icon' /> <label style={{ color: 'red' }}> Aranet</label> <>.</> <label>Todos os diretos reservados</label>
      </div>
    </div>
  )
}

export default Footer