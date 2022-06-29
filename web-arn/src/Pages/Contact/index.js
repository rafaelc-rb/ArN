import React from 'react';
import Header from '../../Components/Header';
import image_contact from '../../Assets/Img/image_contact.png';
import Footer from '../../Components/Footer';
import './styles.css';

function Contact() {
  return (
    <>
      <Header />

      <div>
        <h1 className="title_contact"> Contato </h1>

        <img src={image_contact} className="image_contact" alt="Logo" />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
