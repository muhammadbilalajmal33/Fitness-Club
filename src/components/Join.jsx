import React from 'react';
import joinImg from '../assets/join.jpg';

const features = [
  {
    icon: 'ri-user-star-fill',
    title: 'Personal Trainer',
    description: 'Unlock your potential with our expert Personal Trainers.'
  },
  {
    icon: 'ri-vidicon-fill',
    title: 'Practice Sessions',
    description: 'Elevate your fitness with practice sessions.'
  },
  {
    icon: 'ri-building-line',
    title: 'Good Management',
    description: 'Supportive management, for your fitness success.'
  }
];

const Join = () => {
  return (
    <section className="section__container join__container">
      <h2 className="section__header">WHY JOIN US ?</h2>
      <p className="section__subheader">
        Our diverse membership base creates a friendly and supportive
        atmosphere, where you can make friends and stay motivated.
      </p>
      <div className="join__image">
        <img src={joinImg} alt="Join" />
        <div className="join__grid">
          {features.map((feature, index) => (
            <div className="join__card" key={index}>
              <span><i className={feature.icon}></i></span>
              <div className="join__card__content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Join;