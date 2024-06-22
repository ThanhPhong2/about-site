import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="usersp">
              <div class="item">
                <a>About</a>
                <a>Blog</a>
                <a>Careers</a>
                <a>Press</a>
              </div>
            </div>
            <div class="usersp">
              <div class="item">
                <a>Help</a>
                <a>Advertise</a>
                <a>Developers</a>
                <a>Contact Us</a>
              </div>
            </div>
            <div class="usersp">
              <div class="item">
                <a>Copyright Policy</a>
                <a>Terms</a>
                <a>Privacy Policy</a>
                <a>Sitemap</a>
              </div>
            </div>
            <div class="usersp">
              <div class="item-2">
                <div className="Teach">
                  <a>Teach on Curcus</a>
                </div>
                <div className="Lang">
                  <img src="svg/lang.svg" />
                  <a>Language</a>
                  <img src="svg/arrow.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-2">
        <div class="row">
          <div class="left">
            <div class="logo-footer">
              <img src="svg/logo1.svg" />
            </div>
            <p>
              © 2024 <strong>Cursus</strong>. All Rights Reserved.
            </p>
          </div>
          <div class="right">
            <div class="fb">
              <img src="svg/fb.svg" />
            </div>
            <div class="twitter">
              <img src="svg/twitter.svg" />
            </div>
            <div class="gg">
              <img src="svg/gg.svg" />
            </div>
            <div class="linkedin">
              <img src="svg/linkedin.svg" />
            </div>
            <div class="insta">
              <img src="svg/ins.svg" />
            </div>
            <div class="ytb">
              <img src="svg/ytb.svg" />
            </div>
            <div class="pinterest">
              <img src="svg/pinterest.svg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
