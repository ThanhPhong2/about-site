import React, { useState, useEffect, useRef } from "react";
import "../styles/Careers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Careers = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const containerRef = useRef(null);
  const [showSecondIframe, setShowSecondIframe] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowSecondIframe(!entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  const iframeClass = `iframe ${showSecondIframe ? "iframe-mini" : ""}`;

  const settings = {
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setSlideIndex(current),
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="Career">
      <div className="container" ref={containerRef}>
        <div className="row">
          <div className="column">
            <div className={iframeClass}>
              {/* <iframe
                className="iframe-content"
                src="https://www.youtube.com/embed/TKnufs85hXk"
                title="Envato Elements: Unlimited Assets For Your Creative Projects"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe> */}
              <iframe
              className="iframe-content"
                src="https://www.youtube.com/embed/wWUEx9L4f18"
                title="[s10] Doraemon Phần 10 - Tổng Hợp Bộ Hoạt Hình Doraemon Hay Nhất - POPS Kids"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div class="title">
              <h2>Working at Cursus </h2>
              <img class="line-title" src="svg/line.svg" alt="" />
              <p>
                Phasellus ex mauris, rhoncus quis posuere sit amet, ultricies
                nec lorem. Vivamus vestibulum porta urna, in placerat lectus
                facilisis sit amet. Vestibulum non mauris augue. Maecenas arcu
                magna, aliquam imperdiet tempor nec, lobortis ac erat. Aliquam
                vel magna tortor. Cras ornare, enim eu tristique tristique, orci
                nisl blandit mi, at dignissim velit leo nec metus.
              </p>
              <div class="checkout">
                <a>Check Out Our Open Roles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-2th">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src="svg/career-1.jpg" alt="button" />
            <h4>We are learners</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget enim in turpis consequat tempor sed id neque. Nam at felis et
              elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit
              velit, ac sollicitudin mi bibendum in. In vel nibh sodales,
              venenatis eros a, vulputate ligula.
            </p>
          </div>
          <div>
            <img src="svg/career-2.jpg" />
            <h4>We are navigators</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget enim in turpis consequat tempor sed id neque. Nam at felis et
              elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit
              velit, ac sollicitudin mi bibendum in. In vel nibh sodales,
              venenatis eros a, vulputate ligula.
            </p>
          </div>
          <div>
            <img src="svg/career-3.jpg" />
            <h4>We are global</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget enim in turpis consequat tempor sed id neque. Nam at felis et
              elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit
              velit, ac sollicitudin mi bibendum in. In vel nibh sodales,
              venenatis eros a, vulputate ligula.
            </p>
          </div>
          <div>
            <img src="svg/career-4.jpg" />
            <h4>We make an impact</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget enim in turpis consequat tempor sed id neque. Nam at felis et
              elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit
              velit, ac sollicitudin mi bibendum in. In vel nibh sodales,
              venenatis eros a, vulputate ligula.
            </p>
          </div>
        </Slider>
        <div className="btn-wrap">
          <button
            className={`prev-btn ${slideIndex === 0 ? "slick-disabled" : ""}`}
            onClick={handlePrev}
            disabled={slideIndex === 0}
          >
            <img src="svg/leftarrow.svg" alt="Button Image" />
          </button>
          <button
            className={`next-btn ${slideIndex === 3 ? "slick-disabled" : ""}`}
            onClick={handleNext}
            disabled={slideIndex === 3}
          >
            <img src="svg/rightarrow.svg" alt="Button Image" />
          </button>
        </div>
      </div>
      <div class="container-3th">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Benefits</h2>
              <p>
                Cursus culture is something special, and to complement and
                support that culture we have some amazing benefits.
              </p>
              <img class="line-title" src="svg/line.svg" alt="" />
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <i class="locate"></i>
              <img src="svg/locate.svg" />
              <h4>Work from anywhere</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <i class="plane"></i>
              <img src="svg/plane.svg" />
              <h4>Work and Travel</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/half.svg" />
              <i class="half"></i>
              <h4>Flexible Hours</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/kid.svg" />
              <i class="kid"></i>
              <h4>Purchasing Leave</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/rss.svg" />
              <i class="rss"></i>
              <h4>Social Events</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/flower.svg" />
              <i class="flower"></i>
              <h4>Wellness Program</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/feedback.svg" />
              <i class="feedback"></i>
              <h4>Mentoring Program</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
          <div class="item-list">
            <div class="feature">
              <img src="svg/anchor.svg" />
              <i class="anchor"></i>
              <h4>Fundraising</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget enim in turpis consequat tempor sed id neque. Nam at felis
                et elit auctor accumsan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-4th">
        <div class="row">
          <div class="column">
            <div class="title">
              <h2>Open Roles</h2>
              <p>
                Cursus is a fast growing company and we're expanding both our
                Punjab office and international offices.
              </p>
              <img class="line-title" src="svg/line.svg" alt="" />
            </div>
            <div class="job-card">
              <div class="job-info">
                <div class="job-name">Algorithm Engineer</div>
                <h3>India</h3>
                <button>Learn More and Apply</button>
              </div>
              <div class="job-info">
                <div class="job-name">Chief Technology Officer</div>
                <h3>India</h3>
                <button>Learn More and Apply</button>
              </div>
              <div class="job-info">
                <div class="job-name">Customer Growth & Marketing Analyst</div>
                <h3>India</h3>
                <button>Learn More and Apply</button>
              </div>
              <div class="job-info">
                <div class="job-name">Data Engineer</div>
                <h3>India</h3>
                <button>Learn More and Apply</button>
              </div>
              <div class="job-info">
                <div class="job-name">
                  iOS Developer - Edututs+ San Francisco, CA
                </div>
                <h3>San Francisco, CA</h3>
                <button>Learn More and Apply</button>
              </div>
              <div class="job-info">
                <div class="job-name">Senior UX Designer</div>
                <h3>India</h3>
                <button>Learn More and Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
