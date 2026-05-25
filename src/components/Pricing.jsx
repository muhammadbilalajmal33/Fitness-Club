import React from 'react';

const plans = [
  {
    name: 'Basic Plan',
    price: '$16',
    features: ['Smart workout plan', 'At home workouts']
  },
  {
    name: 'Weekly Plan',
    price: '$25',
    features: ['PRO Gyms', 'Smart workout plan', 'At home workouts']
  },
  {
    name: 'Monthly Plan',
    price: '$45',
    features: ['ELITE Gyms & Classes', 'PRO Gyms', 'Smart workout plan', 'At home workouts', 'Personal Training']
  }
];

const Pricing = () => {
  return (
    <section className="section__container price__container">
      <h2 className="section__header">OUR PRICING PLAN</h2>
      <p className="section__subheader">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="price__grid">
        {plans.map((plan, index) => (
          <div className="price__card" key={index}>
            <div className="price__card__content">
              <h4>{plan.name}</h4>
              <h3>{plan.price}</h3>
              {plan.features.map((feature, idx) => (
                <p key={idx}>
                  <i className="ri-checkbox-circle-line"></i>
                  {feature}
                </p>
              ))}
            </div>
            <button className="btn price__btn">Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;