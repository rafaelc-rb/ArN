import React from 'react';
import image_about from '../../Assets/Img/image-about.png';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './styles.css';

function About() {
  return (
    <>
      <Header />

      <div>
        <h1 className="title">Sobre Nós</h1>

        <h3 className="paragraphs-about">
          A Aranet Comunicação Ltda atua no fornecimento de conexão à internet
          banda larga via fibra óptica e rádio. Licenciada junto a Anatel,
          atende usuários residenciais. Com o intuito de sempre sanar as necessidades de
          conectividade com a rede mundial de computadores, a Aranet conta com
          profissionais experientes, oferecendo a melhor tecnologia
          disponível e ótima relação custo-benefício.
        </h3>

        <img src={image_about} className="image-about" alt="imagem sobre" />

        <h3 className="list-about">
          <li> Esforços voltados à satisfação do cliente </li>
          <li> Autonomia com responsabilidade e integridade</li>
          <li> Compromisso com a qualidade </li>
          <li> Autonomia com responsabilidade e integridade</li>
          <li> Autonomia com responsabilidade e integridade</li>
          <li> Autonomia com responsabilidade e integridade</li>
        </h3>

        <h3 className="paragraphs-about">
          O resultado da excelência de nossa empresa é mensurado com o seu
          crescimento. Hoje, atuamos em diversas cidades do estado de Goiás:
          <ul>
            <li> Anápolis </li>
            <li> Ouro Verde </li>
            <li> Alexânia </li>
            <li> Abadiânia </li>
          </ul>
        </h3>
        <h3 className="paragraphs-about">
          Ser uma empresa reconhecida no setor por sua
          qualidade, inovação e transparência. Proporcionar aos nossos clientes
          um serviço de alta qualidade e desempenho. Garantido sempre a
          satisfação de todos os envolvidos.
        </h3>
      </div>

      <Footer />
    </>
  );
}

export default About;
