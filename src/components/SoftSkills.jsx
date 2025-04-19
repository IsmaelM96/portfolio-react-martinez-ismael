import React from 'react';

const softSkills = ["Trabajo en equipo", "Comunicación efectiva", "Resolución de problemas"];

const SoftSkills = () => {
  return (
    <section className="soft-skills section-offset" id="soft-skills">
      <div className="container">
        <h2>Soft Skills</h2>
        <div className="content">
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;