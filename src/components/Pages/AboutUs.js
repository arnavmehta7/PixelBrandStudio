import LINE from "../../assets/images/line.jpg";
import CRATIVE from "../../assets/images/about-crative.png";
import SELFIE from "../../assets/images/selfie.jpg";
import CONNECTPEOPLE from "../../assets/images/connect-people.png";
const AboutUs = () => {
  return (
    <div className="plead">
      <section className="aboutbanner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-in left">
                <h2>
                  <img src={LINE} alt="line-icon" /> ABOUT US
                </h2>

                <h1>
                  Experience <br /> Visual AI
                </h1>
                <p>
                  Our service allows millions of creators across the world to
                  innovate their artistic pursuits by using specialized visual
                  AI tools without the need for additional software.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="mission-img">
                <img src={CRATIVE} alt="image" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mission-detail mission-padding left">
                <h2>
                  Slash Editing <br /> made simple{" "}
                </h2>
                <p>
                  We seek to simplify the art of slash editing and make Visual
                  AI accessible to everyone as it provides the opportunity to
                  foster creativity and enthusiasm among individuals and
                  companies alike and help people explore and reinvent
                  photography.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission aims-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="mission-detail right-padding left">
                <h2>
                  Turn your ideas
                  <br /> into reality
                </h2>
                <p>
                  Pixelbrandstudio provides an all-time perfect solution to the
                  manual task of removing backgrounds. Through advanced visual
                  AI tools, developers aim for designers to get their desired
                  cutouts automatically and create their ideal artwork.
                </p>
              </div>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mission-img">
                <img src={SELFIE} alt="image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission-detail left">
                <h2>
                  Phenomenal AI makes
                  <br /> editing quick
                </h2>
                <p>
                  The process of removing background from pictures can be a
                  rather tedious step in the editing process, which is why we
                  come to save the day and get the work done excellently within
                  seconds.
                </p>

                <p>
                  We endeavor to continue improving and serve high-quality
                  performance with the help of steadily emerging technological
                  phenomena of AI so that we offer our users top-notch results
                  at best.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission map">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="mission-detail right-padding left">
                <h2>Designed for the world</h2>
                <p>
                  Our services run seamlessly across a diverse audience all over
                  the globe. We take pride in its simplicity and accessibility
                  that millions of creators worldwide benefit from.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mission-img">
                <img src={CONNECTPEOPLE} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
