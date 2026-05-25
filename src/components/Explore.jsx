import React from 'react';

const programs = [
  {
    icon: 'ri-boxing-fill',
    title: 'Strength',
    description: 'Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.'
  },
  {
    icon: 'ri-heart-pulse-fill',
    title: 'Physical Fitness',
    description: 'It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.'
  },
  {
    icon: 'ri-run-line',
    title: 'Fat Lose',
    description: "Through a combination of workout routines and expert guidance, we'll empower you to reach your goals."
  },
  {
    icon: 'ri-shopping-basket-fill',
    title: 'Weight Gain',
    description: 'Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.'
  }
];

const Explore = () => {
  return (
    <section className="section__container explore__container">
      <div className="explore__header">
        <h2 className="section__header">EXPLORE OUR PROGRAM</h2>
        <div className="explore__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <div className="explore__grid">
        {programs.map((program, index) => (
          <div className="explore__card" key={index}>
            <span><i className={program.icon}></i></span>
            <h4>{program.title}</h4>
            <p>{program.description}</p>
            <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;