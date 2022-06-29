import React from 'react';
import image_contact from '../../Assets/Img/image_contact.png';
import Header from '../../Components/Header';
import './styles.css';

function Contact() {
  return (
    <>
      <Header />

      <div>
        <h1 className="title"> Contato </h1>

        <img src={image_contact} className="image_contact" alt="Logo" />
      </div>
    </>
  );
}

export default Contact;
