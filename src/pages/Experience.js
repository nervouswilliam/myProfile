import React from "react";
import "./css/experience.css";

export default function Experience() {
  return (
    <section>
      <div class="header">
        <h1>my experiences</h1>
      </div>

      <div class="title">
        <b>My Projects</b>
      </div>

      <div class="content">
        <div class="column">
          <div class="upper">
            <center>
              <a href="">
                <h2>StocKing</h2>
              </a>
            </center>
          </div>
          <div class="middle">
            <img src="../pictures/stocking.png" />
          </div>
          <div class="lower">
            <center>
              <h3>Project Duration:</h3>
              <p>May 2023 - June 2023</p>
            </center>
          </div>
        </div>

        <div class="column">
          <div class="upper">
            <center>
              <a href="">
                <h2>Vorskin</h2>
              </a>
            </center>
          </div>
          <div class="middle">
            <img src="../pictures/vorskin.png" />
          </div>
          <div class="lower">
            <center>
              <h3>Project Duration:</h3>
              <p>June 2022 - July 2022</p>
            </center>
          </div>
        </div>

        <div class="column">
          <div class="upper">
            <center>
              <a href="">
                <h2>Merci</h2>
              </a>
            </center>
          </div>
          <div class="middle">
            <img src="../pictures/merci.png" />
          </div>
          <div class="lower">
            <center>
              <h3>Project Duration:</h3>
              <p>September 2021 - February 2022</p>
            </center>
          </div>
        </div>

        <div class="column">
          <div class="upper">
            <center>
              <a href="">
                <h2>My Profile</h2>
              </a>
            </center>
          </div>
          <div class="middle">
            <img src="../pictures/stocking.png" />
          </div>
          <div class="lower">
            <center>
              <h3>Project Duration:</h3>
              <p>May 2023 - June 2023</p>
            </center>
          </div>
        </div>
      </div>
      <br />

      <div class="title">
        <b>Coding Competitions:</b>
      </div>
      <div class="content">
        <div class="column">
          <div class="upper">
            <center>
              <a href="">
                <h2>International Collegiate Programming Contest</h2>
              </a>
            </center>
          </div>
          <div class="middle">
            <img src="../pictures/icpc.png" />
          </div>
          <div class="lower">
            <center>
              <h3>Year participated:</h3>
              <p>January 2023</p>
            </center>
          </div>
        </div>

        <div class="column">
          <div class="upper">
            <center>
              <a href="">
                <h2>
                  National Programming Contest By Institute Teknologi Surabaya
                </h2>
              </a>
            </center>
          </div>
          <div class="middle">
            <img src="../pictures/npc.png" />
          </div>
          <div class="lower">
            <center>
              <h3>Year Participated:</h3>
              <p>September 2023</p>
            </center>
          </div>
        </div>
      </div>

      <br />
      <div class="title">
        <b>Clubs Joined: </b>
      </div>

      <div class="content">
        <div class="column">
          <div class="upper">
            <center>
              <a href="">
                <h2>Bina Nusantara Computer Club</h2>
              </a>
            </center>
          </div>
          <div class="middle">
            <img src="../pictures/bncc.png" />
          </div>
          <div class="lower">
            <center>
              <h3>Years Active:</h3>
              <p>April 2021 - April 2022</p>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}
