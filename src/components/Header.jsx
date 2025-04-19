import React from 'react';

const Header = () => {
  return (
    <header id="home">
      {/* Navbar */}
      <nav>
        <div className="container nav-container">
          <div className="logo">
            <a href="#home">
              <img src="/img/logo4.png" alt="Logo" className="logo-img" />
            </a>
          </div>
          <ul className="navbar">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Portada */}
      <div className="container header-content">
        <div className="text-container">
          <h1>Hola, soy Ismael Martinez.</h1>
          <p className="subtitle">Desarrollador Web | Estudiante de Programación</p>
          <a href="/cv/archivodeprueba.txt" download className="btn-download">
            Descargar mi CV
          </a>
        </div>
        <div className="profile-image">
          <img src="/img/profile.jpg" alt="Foto personal" className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;