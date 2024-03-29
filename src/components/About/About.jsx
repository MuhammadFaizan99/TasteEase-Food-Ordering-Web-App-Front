import React from "react";
import "./About.css";
import { FaUtensils, FaGlobe, FaHeart } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-image">
          <img
            src="../../../images/about-unsplash.jpg"
            alt="TasteEase"
          />
        </div>
        <div className="about-text">
          <h2>Welcome to TasteEase</h2>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <p>
              <FaUtensils className="icon" />
              At TasteEase, we believe that food is not just sustenance, but a
              journey of exploration and delight. Our passion for exceptional
              culinary experiences drives us to seek out the most exquisite
              ingredients and create masterful dishes that tantalize the senses.
            </p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <p>
              <FaGlobe className="icon" />
              Founded in 20XX, TasteEase has quickly gained recognition as a
              pioneer in the gastronomy world. Our team of talented chefs,
              sommeliers, and food enthusiasts work tirelessly to bring you a
              diverse menu that reflects the rich tapestry of global cuisines.
            </p>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <p>
              <FaHeart className="icon" />
              Whether you're an adventurous foodie or a connoisseur of classic
              flavors, TasteEase promises to elevate your dining experience to
              new heights. Join us on this mouthwatering journey and indulge in
              the art of taste.
            </p>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default About;