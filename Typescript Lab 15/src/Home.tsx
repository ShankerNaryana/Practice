import React from "react";
import ai from './ai.jpeg'
const Home: React.FC = () => {
  return (
    <div className="page">
      <h1>Welcome to Our Website!</h1>
      <img src={ai} />
      <p>We are glad to have you here.</p>
    </div>
  );
};

export default Home;
