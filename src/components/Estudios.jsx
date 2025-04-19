import React from 'react';

const estudios = [
  { institucion: "Universidad Tecnológica Nacional - Facultad Regional Tucumán", titulo: "Tecnicatura Universitaria en Programación", año: "2024 - Actualidad" },
  { institucion: "Escuela Técnica N°2 Obispo Colombres", titulo: "Técnicon en electrónica", año: "2009 - 2015" }
];

const Estudios = () => {
  return (
    <section className="estudios section-offset" id="estudios">
      <div className="container">
        <h2>Estudios</h2>
        <div className="content">
          <ul>
            {estudios.map((estudio, index) => (
              <li key={index}>
                <strong>{estudio.titulo}</strong> - {estudio.institucion} ({estudio.año})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Estudios;