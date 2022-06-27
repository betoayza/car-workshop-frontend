import React from "react";
import ferrari from '../img/ferrari.jpg';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Super Car</h2>
      <p>The best place to tune your ride</p>
      <img src={ferrari} alt="Ferrari" width="500px" height="400"/>
    </div>
  );
};

export default Home;
