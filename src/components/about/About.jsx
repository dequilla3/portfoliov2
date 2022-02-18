import React from "react";
import "./about.css";
import me2 from "../../img/me2.jpg";
import aclc from "../../img/aclc_logo.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Motivated BS Information Technology graduate from the ACLC College of
          Marbel with more than 1 year of experience in software development.
          Seeking to use proven skills in Java to meet business needs.
        </p>
        <p className="a-desc">
          I started my career in software development last September of 2020.
          Within that time I have gained domain knowledge as a Software
          Developer. For now I am currently studying ReactJs for frontend and
          Spring Boot for backend. Java is my most well known programming
          language as my first language I've learned way back college.
        </p>
        <div className="a-educ">
          <img src={aclc} alt="" className="a-educ-img" />
          <div className="a-educ-text">
            <h4 className="a-educ-title">ACLC College of Marbel 2020</h4>
            <p className="a-educ-desc">
              Studied Bachelor of Science in Information Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
