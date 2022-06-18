import React from 'react'
import NavBar from '../../Components/NavBar'
import image_contact from '../../Assets/Img/image_contact.png'

import './styles.css'

function Contact() {
  return (

    <>
     <NavBar />

    <div>

    <h1 className='title_contact'> Contato </h1>

    <img src={image_contact}  className="image_contact" alt="Logo" />


    </div>

    </>

  )
}

export default Contact