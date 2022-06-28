import React from 'react';
import image_about from '../../Assets/Img/image_about.png';
import Header from '../../Components/Header';
import './styles.css';

function About() {
  return (
    <>
      <Header />

      <div>
        <h1 className="title_about">Sobre Nós</h1>

        <h3 className="paragraph_about">
          A Aranet Comunicação Ltda atua no fornecimento de conexão à internet
          banda larga via fibra óptica e rádio. Licenciada junto a Anatel,
          atende empresas de pequeno, médio e grande porte, além de usuários
          residenciais. Com o intuito de sempre sanar as necessidades de
          conectividade com a rede mundial de computadores, a Aranet conta com
          profissionais experientes,300px oferecendo a melhor tecnologia
          disponível e ótima relação custo-benefício.
        </h3>

        <img src={image_about} className="image_about" alt="imagem sobre" />

        <h3 className="list">
          <li> Esforços voltados à satisfação do cliente </li>
          <li> Autonomia com responsabilidade e integridade</li>
          <li> Compromisso com a qualidade </li>
          <li> Autonomia com responsabilidade e integridade</li>
          <li> Autonomia com responsabilidade e integridade</li>
          <li> Autonomia com responsabilidade e integridade</li>
        </h3>

        <h3 className="second_paragraph_about">
          O resultado da excelência de nossa empresa é mensurado com o seu
          crescimento. Hoje, atuamos em diversos estados do País: Maranhão /
          Tocantins / Pará Ser uma empresa reconhecida no setor por sua
          qualidade, inovação e transparência. Proporcionar aos nossos clientes
          um serviço de alta qualidade e desempenho. Garantido sempre a
          satisfação de todos os envolvidos.
        </h3>
      </div>
    </>
  );
}

export default About;
