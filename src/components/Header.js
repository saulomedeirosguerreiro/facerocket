import React, {Component} from 'react';
import profile from '../assets/profile.png';
function Header() {
    return (
      <header>
        <nav>
          <img src={"https://i.imgur.com/KDIDiSE.png"} />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }

export default Header;