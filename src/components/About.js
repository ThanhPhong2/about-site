import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div class="About">
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Our Features</h2>
              <p>On Cursus, you have access to:</p>
              <img class="line-title" src="svg/line.svg" alt="" />
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <i class="mobile-android"></i>
              <img src="svg/mobile.svg" />
              <h4>Mobile learning</h4>
              <p>
                Quisque nec volutpat sem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <i class="users"></i>
              <img src="svg/users.svg" />
              <h4>Academic &amp; Technical Support</h4>
              <p>
                Quisque nec volutpat sem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/award.svg" />
              <i class="award"></i>
              <h4>Sharable Certificates</h4>
              <p>
                Quisque nec volutpat sem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/global.svg" />
              <i class="globe"></i>
              <h4>An Inclusive Experience</h4>
              <p>
                Quisque nec volutpat sem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-2th">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Our Story</h2>
              <img class="line-title" src="svg/line.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur vel dolor id ultrices. Proin a magna at mi pretium
                pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis
                augue. Nam vitae purus placerat, hendrerit nisl id, finibus
                magna. Etiam pharetra gravida ornare. Donec sagittis, ipsum in
                egestas egestas, dui lorem sollicitudin justo, ut ullamcorper
                velit neque eu velit. Ut et fringilla elit. Mauris augue augue,
                auctor a blandit ac, convallis eget neque. Curabitur in ante
                ante. Nullam laoreet tempus erat at ornare. In nisl nisi,
                dapibus eget facilisis sit amet, commodo quis nibh.
              </p>
            </div>
            <img class="story" src="svg/stroy_img.png" alt="" />
          </div>
        </div>
      </div>
      <div class="container-3th">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Our Global Reach</h2>
              <p>
                Cursus is the leading global marketplace for teaching and
                learning, connecting millions of students to the skills they
                need to succeed.
              </p>
              <img class="line-title" src="svg/line.svg" alt="" />
            </div>
            <div class="parameter">
              <div class="para-detail">
                <h4>25k</h4>
                <p>Instructors</p>
              </div>
              <div class="para-detail">
                <h4>95k</h4>
                <p>Courses</p>
              </div>
              <div class="para-detail">
                <h4>40M</h4>
                <p>Course enrollments</p>
              </div>
              <div class="para-detail">
                <h4>50+</h4>
                <p>Languages</p>
              </div>
              <div class="para-detail">
                <h4>595+</h4>
                <p>Membership Partners</p>
              </div>
              <div class="para-detail">
                <h4>295</h4>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-4th">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Meet Our Team</h2>
              <p>
                A perfect blend of creativity and technical wizardry. The best
                people formula for great websites!
              </p>
              <img class="line-title" src="svg/line.svg" alt="" />
              <div class="descripts">
                Morbi eget elit eget turpis varius mollis eget vel massa. Donec
                porttitor, sapien eget commodo vulputate, erat felis aliquam
                dolor, non condimentum libero dolor vel ipsum. Sed porttitor
                nisi eget nulla ullamcorper eleifend. Fusce tristique sapien
                nisi, vel feugiat neque luctus sit amet. Quisque consequat quis
                turpis in mattis. Maecenas eget mollis nisl. Cras porta dapibus
                est, quis malesuada ex iaculis at. Vestibulum egestas tortor in
                urna tempor, in fermentum lectus bibendum. In leo leo, bibendum
                at pharetra at, tincidunt in nulla. In vel malesuada nulla, sed
                tincidunt neque. Phasellus at massa vel sem aliquet sodales non
                in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus
                luctus elementum tortor, ac aliquet dolor vehicula et.
              </div>
              <img class="team" src="svg/team.jpg" alt="" />
            </div>
            <div className="Join">
              <a>Join Our Team</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
