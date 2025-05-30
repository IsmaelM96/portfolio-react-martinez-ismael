import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        {/* Contacto */}
        <h2>Contacto</h2>
        <br></br>
        <div className="contact-links">
          {/* Email */}
          <div className="contact-item">
            <img src="/img/mail-icon.png" alt="Email" className="icon" />
            <p>Email: <a href="mailto:ejemplo@email.com">ejemplo@email.com</a></p>
          </div>
          {/* LinkedIn */}
          <div className="contact-item">
            <img src="/img/linkedin-icon.png" alt="LinkedIn" className="icon" />
            <p>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">Mi Perfil LinkedIn</a></p>
          </div>
          {/* GitHub */}
          <div className="contact-item">
            <img src="/img/github-icon.png" alt="GitHub" className="icon" />
            <p>GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Mi Perfil GitHub</a></p>
          </div>
          {/* Facebook */}
          <div className="contact-item">
            <img src="/img/facebook-icon.png" alt="Facebook" className="icon" />
            <p>Facebook: <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Mi Perfil Facebook</a></p>
          </div>
          {/* Instagram */}
          <div className="contact-item">
            <img src="/img/instagram-icon.png" alt="Instagram" className="icon" />
            <p>Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Mi Perfil Instagram</a></p>
          </div>
        </div>

        {/* Información adicional */}
        <br></br>
        <p>&copy; 2025 - Desarrollado por Ismael Martinez</p>
        <p>Tecnicatura Universitaria en Programación</p>
        <p>Comisión 1</p>
        <p>Universidad Tecnológica Nacional - Facultad Regional Tucumán</p>
      </div>
    </footer>
  );
};

export default Footer;
// Este es un cambio menor realizado para probar la creación de ramas en Git.