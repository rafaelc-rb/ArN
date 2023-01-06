import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Img/logo.png';
import './styles.css';

function NavBar() {
  let navigate = useNavigate();
  const about = () => {
    let path = '/about';
    navigate(path);
  };
  const contact = () => {
    let path = '/contact';
    navigate(path);
  };
  const contract = () => {
    let path = '/contract';
    navigate(path);
  };

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="250px" />
        </Navbar.Brand>

        <Navbar.Toggle className="nav-toggle-button" />

        <Navbar.Collapse>
          <Nav className="me-auto" />

          <Nav className="nav-list">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link onClick={about}>Sobre nós</Nav.Link>
            <Nav.Link href="/#plans">Planos</Nav.Link>
            <Nav.Link href="https://aranet.speedtestcustom.com">
              Teste de Velocidade
            </Nav.Link>

            <Nav.Link onClick={contact}>Atendimento</Nav.Link>
            <Nav.Link onClick={contract}>Contrato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
