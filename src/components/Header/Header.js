import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bulma/css/bulma.css'

const Header = () => 
<header className="container">
  <section className="hero is-warning">
    <div className="hero-body">
      <div className="container">
        <NavLink exact to="/" className="title">Commodum</NavLink>
      </div>
    </div>

    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink exact to="/tender/add" className="navbar-item">Create a tender</NavLink>
        </div>
      </div>
    </nav>
  </section>
</header>



export default Header;