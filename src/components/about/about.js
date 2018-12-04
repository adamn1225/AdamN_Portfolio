import React, { Component } from 'react';
export default class Header extends Component {
  render() {
      return (

        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>My name is Adam Noah. I was born and raised in Lakewood, NJ where I learned judaic and secular studies.
                At age 18 I moved down to Boca Raton, FL. I have 3 experience working in sales as a logistics consultant
                and a years experience in marketing for a social media marketing company and a non profit organization.
                I decided to follow my passion of becoming a full stack web developer and enrolled in Wyncode Acadamy where
                I learned to not only code, but also the meaning of a growth mindset.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Adam Noah</span><br />
                    <span>4161 Coral Tree Circle<br />
                      Coconut Creek, FL 33073 US
                    </span><br />
                    <span>954-826-4318</span><br />
                    <span>anoah1225@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };
