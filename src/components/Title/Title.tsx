import React from 'react';
import './title.css';

const Title: React.FC = () => {
  const user = "Content Creator"
  return (
    <div>
      <div>
        <h2>The<br /> <span className="user">{ user }</span><br /> publishing house</h2>
        <p className="presentation-text">Enjoy Books of all kinds!</p>
      </div>
      <div className="presales">
        <h4 className="sales">Now on Pre-sales</h4>
        <h5 className="more">See more</h5>
      </div>
    </div>
  );
};

export default Title;
