import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/AboutMe.module.css";

export default function AboutMe() {
  const Navigate = useNavigate();
  const NavigateToExperience = () => {
    Navigate("/Experience");
  };

  return (
    <section>
      <div className={styles.header}>
        <h1>About Me</h1>
      </div>
      <div className={styles.containerBackground}>
        <div className={styles.madrid}>
          <img src="../pictures/background.jpg" />
        </div>
        <div className={styles.background}>
          <p>
            <h2>Background</h2>
            Date of Birth: 20th April 2023
            <br />
            <br />
            Place of Birth: Jakarta
            <br />
            <br />
            Current University: Binus University
            <br />
            <br />
            Major: Computer Science (software engineer)
            <br />
          </p>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.traits}>
          <p>
            <h2>Passion and Interest</h2>
            My hobbies are:
            <ul>
              <li>Basketball</li>
              <li>Soccer</li>
              <li>Coding</li>
              <li>Gaming</li>
            </ul>
            I like to expose my self to new stuff and experience new challenges
            in life.
            <br />
            <br />
            I also Love Travelling and experience a new culture as well as enjoy
            beautiful scenery.
            <br />
            <br />
            Another hobby and interest of mine is taking pictures of exotic
            sports and luxurious cars
          </p>
        </div>
        <div className={styles.hobbies}>
          <img src="../pictures/hobbies.jpg" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.pictures}>
          <img src="../pictures/profPic.jpg" />
        </div>
        <div className={styles.Experience}>
          <p>
            <h2>My experience</h2>
            Currently I am a third year student with multiple years of
            experience in developing websites and applications.
            <br />
            <br />
            I have done multiple projects using various programming languages.
            Furthermore, I have experience in both Front End and Back end
            Development.
            <br />
            <br />
            I have also done projects that includes multiple programmers, which
            uses git as our version control for our project.
            <br />
            <br />
            To learn more about my projects, click here:
            <br />
            <div className={styles.projects}>
              <button onClick={NavigateToExperience}>Projects</button>
            </div>
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.traits}>
          <p>
            <h2>My traits</h2>
            I am very passionate and eager to learn new programming languages.
            <br />
            I am also motivated to work hard to achieve the goals I've set and
            exceed them.
            <br />I am not afraid of gettng outside from my comfort zone to
            experience new environment.
          </p>
        </div>
        <div className={styles.pictures2}>
          <img src="../pictures/traits.jpg" />
        </div>
      </div>
    </section>
  );
}
