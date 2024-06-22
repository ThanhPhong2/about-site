import React from "react";
import "../styles/Company.css";

const Company = () => {
  return (
    <div class="Company">
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Our Origins</h2>
              <img class="line-title" src="svg/line.svg" alt="" />
              <p>
                Cursus was founded in 2020 by computer science instructor with a
                vision to provide anyone, anywhere with access to the world’s
                best education. Now many instructors put their courses online
                for anyone to take and taught more learners in a few months than
                they could over an entire lifetime in the classroom. Today,
                Cursus has expanded to reach more than 40 million people and
                2,300 businesses around the world. On Cursus you can find online
                courses, instructors, and certificates from Cursus.
              </p>
            </div>
            <img class="comp" src="svg/company.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="container-2th">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Our Offices</h2>
              <p>Cursus branches around the world</p>
              <img class="line-title" src="svg/line.svg" alt="" />
            </div>
          </div>
          <div class="card">
            <div class="item-card" >
              <img src="svg/company-1.jpg" />
              <div class="details">
                <h3>Punjab, India</h3>
                <div class="address">
                  #1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH,
                  Punjab, India
                </div>
                <div class="contact">
                  <img src="svg/phone.svg" />
                  <p>0161-1234567</p>
                </div>
              </div>
            </div>
            <div class="item-card">
              <img src="svg/company-2.jpg" />
              <div class="details">
                <h3>San Francisco, CA</h3>
                <div class="address">
                  586 Lorem st. 5 floor, San Francisco, CA 94107
                </div>
                <div class="contact">
                  <img src="svg/phone.svg" />
                  <p>+1 415-1234567</p>
                </div>
              </div>
            </div>
            <div class="item-card">
              <img src="svg/company-3.jpg" />
              <div class="details">
                <h3>São Paulo, Brazil</h3>
                <div class="address">
                  Lorem ipsum 589, Vila Madalena, São Paulo - SP 01443-010
                </div>
                <div class="contact">
                  <img src="svg/phone.svg" />
                  <p>+55-11-1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
<div>Company</div>;
