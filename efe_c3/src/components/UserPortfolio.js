import React from 'react';

const UserPortfolio = () => {
  const fullName = 'Efe Oyiborhoro';
  const educationalBackground = 'Higher National Diploma, (HND) in Electrical Egineering';
  const professionalBackground = 'Frontend Developmer @ AzubiAfrica';
  const skills = ['HTML/CSS', 'javaScript', 'Nodejs', 'React'];

  return (
    <div className="user-portfolio">
      <h1>{fullName}'s Portfolio</h1>

      <div className="Education-Section">
        <h2>Educational Background</h2>
        <p>{educationalBackground}</p>
      </div>

      <div className="Professinal-section">
        <h2>Professional Background</h2>
        <p>{professionalBackground}</p>
      </div>

      <div className="Skills-section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default UserPortfolio;
