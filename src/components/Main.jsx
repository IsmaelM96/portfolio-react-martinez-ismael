import React from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';

const proyectos = [
  {
    titulo: "Proyecto 1",
    descripcion: "Calculadora interactiva de estadística descriptiva que permite calcular medidas como media, mediana, moda, varianza y desviación estándar. Diseñada con HTML, CSS y JavaScript para ofrecer una experiencia rápida y accesible.",
    imagen: "/img/project1-screenshot.png",
    enlace: "https://ejemplo.com/proyecto1"
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Sistema de autenticación básico con funcionalidades de login y signup. Implementado con HTML, CSS y JavaScript, incluye validaciones de campos y manejo de datos del usuario",
    imagen: "/img/project2-screenshot.png",
    enlace: "https://ejemplo.com/proyecto2"
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Calculadora especializada en resolver funciones cuadráticas (ax² + bx + c). Permite encontrar las raíces, el vértice y graficar la parábola. Ideal para estudiantes y profesores de matemáticas.",
    imagen: "/img/project3-screenshot.png",
    enlace: "https://ejemplo.com/proyecto3"
  },
  {
    titulo: "Proyecto 4",
    descripcion: "Herramienta matemática para calcular determinantes de matrices 3x3. Ofrece resultados precisos y una interfaz intuitiva, diseñada para facilitar operaciones algebraicas complejas.",
    imagen: "/img/project4-screenshot.png",
    enlace: "https://ejemplo.com/proyecto4"
  }
];

const Main = () => {
  return (
    <main>
      {/* Sobre mí */}
      <section className="about section-offset" id="about">
        <div className="container">
          <h2>Sobre mí</h2>
          <div className="content">
            <p>Soy Ismael Martinez, estudiante de programación de la Universidad Tecnológica Nacial -Facultad Regional Tucumán con una sólida base en HTML, CSS, JavaScript y C#. Mi enfoque se centra en el desarrollo web, donde busco constantemente nuevas formas de crear experiencias digitales innovadoras y accesibles.</p>
            <p>Desde muy joven me ha fascinado la tecnología y la forma en que puede mejorar la vida de las personas. A lo largo de mi formación, he trabajado en proyectos que me han permitido aplicar mis conocimientos técnicos y mejorar mis habilidades de resolución de problemas.</p>
            <p>Me considero una persona autodidacta, proactiva y en constante búsqueda de mejorar. Aspiro a trabajar en equipos que valoren la colaboración y la creatividad, y donde pueda seguir creciendo como profesional.</p>
          </div>
        </div>
      </section>

      {/* Estudios */}
      <Estudios />

      {/* Soft Skills */}
      <SoftSkills />

      {/* Proyectos */}
      <section className="projects section-offset" id="projects">
        <div className="container">
          <h2>Proyectos</h2>
          <div className="project-list">
            {proyectos.map((proyecto, index) => (
              <a key={index} href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="project-card">
                <div className="project-image">
                  <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} className="project-screenshot" />
                </div>
                <div className="project-info">
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.descripcion}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;