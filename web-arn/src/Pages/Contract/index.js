import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './styles.css';

function Contract() {
  return (
    <div>
      <Header />

     <h1 className="title" > Contrato </h1> 
     <h3 className="subtitle"> Termo de comodato </h3>

      <div> 

      <Form>
  <Form.Group className="mb-3" controlId="formBasicCliente">
    <Form.Label>Cliente</Form.Label>
    <Form.Control type="string" placeholder="Inserir nome completo" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCNPJCPF">
    <Form.Label>CNPJ/CPF</Form.Label>
    <Form.Control type="string" placeholder="Inserir CPF/CNPJ" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEndereco">
    <Form.Label>Endereço</Form.Label>
    <Form.Control type="string" placeholder="Inserir Endereço" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicBairro">
    <Form.Label>Bairro</Form.Label>
    <Form.Control type="string" placeholder="Inserir Bairro" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCEP">
    <Form.Label>CEP</Form.Label>
    <Form.Control type="string" placeholder="Inserir CEP" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicTelefone">
    <Form.Label>Telefone</Form.Label>
    <Form.Control type="string" placeholder="Inserir Telefone" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPlano">
    <Form.Label>Plano</Form.Label>
    <Form.Control type="string" placeholder="Inserir Plano" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicUsuario">
    <Form.Label>Usuário</Form.Label>
    <Form.Control type="string" placeholder="Inserir Usuário" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSenha">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Inserir Senha" />
  </Form.Group>

  
  <Button className="primary" type="submit">
    Enviar
  </Button>

  <Button className="secondary" type="submit">
    Cancelar
  </Button>

</Form>
</div>
      <Footer />
    </div>
    );
}

export default Contract;
