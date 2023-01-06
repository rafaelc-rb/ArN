import React from 'react';
import NavBar from '../NavBar';
import './styles.css';

function Header(props) {

  return (
    <div className={props.type}>
      <NavBar />
    </div>
  );
}

export default Header;
