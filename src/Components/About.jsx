/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/wood.jpg";

const imageAltText = "wood photo having brown and yellow shades";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Founder and Lead Microsoft LSA LNCT UNIVERSITY | BTech | CSE-AIML| 5★ on Hackerrank | LeetCode | Front End Developer | C/C++| UI/UX|";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web developer",
  "UI UX designer",
  "Full stack developer",
  "Microsoft LSA Lead",
  "Learning app development",
  "Graphic design Intern",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Passionate and driven individual with a solid foundation in Python, SQL, HTML, CSS,C++, R and Javascript. Actively seeks opportunities to enhance skills and explore new languages, frameworks, and principles. Committed to treating others with respect and continually seeks to help and stay updated with emerging technologies";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
