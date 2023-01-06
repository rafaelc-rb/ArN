import React from 'react';
import Header from '../../Components/Header';
import image_contact from '../../Assets/Img/image-contact.png';
import Footer from '../../Components/Footer';
import './styles.css';

function Contact() {
  return (
    <>
      <Header type='header'/>

      <div>
        <h1 className="title"> Contato </h1>

        <img src={image_contact} className="image-contact" alt="Logo" />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
