import React from 'react'
import './styles.css'
import image_contact from '../../Assets/Img/image_contact.png'
import Header from '../../Components/Header'

function Contact() {
  return (

    <>
     <Header />

    <div>

    <h1 className='title_contact'> Contato </h1>

    <img src={image_contact}  className="image_contact" alt="Logo" />


    </div>

    </>

  )
}

export default Contact