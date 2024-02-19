// import React from "react";
import "./AboutCard.css";

export const AboutCard = () => {
  return (
    <div class="wrapper">
      <div class="container">
        <input type="radio" name="slide" id="c1" checked></input>
        <label for="c1" class="card">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" checked></input>
        <label for="c2" class="card">
          <div class="row">
            <div class="icon">2</div>
            <div class="description">
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" checked></input>
        <label for="c3" class="card">
          <div class="row">
            <div class="icon">3</div>
            <div class="description">
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        
        <input type="radio" name="slide" id="c4"></input>
        <label for="c4" class="card">
          <div class="row">
            <div class="icon">4</div>
            <div class="description">
              <h4>New technologies</h4>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c5" checked></input>
        <label for="c5" class="card">
          <div class="row">
            <div class="icon">5</div>
            <div class="description">
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
