import React from "react";
const Services: React.FC = () => {
  const services = ["Web Development", "Mobile Apps", "SEO Optimization"];
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Our Services</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((service, index) => (
          <li key={index} style={{ margin: "1rem 0" }}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
