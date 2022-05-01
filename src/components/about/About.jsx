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
          Hi, I'm Kim a motivated BS Information Technology graduate from AMA
          Computer Learning Center (ACLC) College with 2 years of working
          experience in software development. Seeking to use proven skills in
          Java to meet business needs. Throughout my career, I have done some of
          my best work under pressure. I find that routine makes us complacent,
          and I am always looking for challenges that push me to give my best
          and to quickly come up with working solutions.
        </p>
        <div className="a-educ">
          <img src={aclc} alt="" className="a-educ-img" />
          <div className="a-educ-text">
            <h4 className="a-educ-title">ACLC College of Marbel</h4>
            <p className="a-educ-desc">
              Studied Bachelor of Science in Information Technology. I graduated
              last April 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
