import React from "react";

const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <section className="bg-primary py-10 text-center">
      <h5>Copyright manufacturer {today}</h5>
    </section>
  );
};

export default Footer;
