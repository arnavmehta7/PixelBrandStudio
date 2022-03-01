import IMG from "../../assets/images/curves-1.jpg";
import TOMATO from "../../assets/images/tamoto-trans.jpg";
import IMT from "../../assets/images/ImtbhIo.png";
import TOMATO_AFTER from "../../assets/images/tamo-col.jpg";
import LEFT from "../../assets/images/left-img.png";
import RIGHT from "../../assets/images/right-img.png";
import { useDropzone } from "react-dropzone";
import VID from "../../assets/video/video/Upwork Ahmady.mp4";
import logo1 from "../../assets/images/logo-1.png";
import logo2 from "../../assets/images/logo-2.png";
import logo3 from "../../assets/images/logo-3.png";
import logo4 from "../../assets/images/logo-4.png";
import logo5 from "../../assets/images/logo-5.png";
import logo6 from "../../assets/images/logo-6.png";
import VIDFRAME from "../../assets/images/vide-frame.jpg";
import ARROW from "../../assets/images/direction-arrow.png";
import GOGLE from "../../assets/images/gogle-img.jpg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const Ecommerce = () => {
  const Style = {
    backgroundImage: "url('../../assets/images/curves-1.jpg')",
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <div className="home-banner-commerce ecommerce">
        <div className="container ">
          <div className="row ">
            <div className="col-md-8 ">
              <div className="banner-inner-content mrr">
                <p>backimg.bg for ecommerce</p>
                <h3>
                  optimize your <br /> photos and sell
                </h3>
                <h2>more products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Automatically Remove tha background section*/}
      <div className="back-remove-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="back-section-content">
                <div className="head">
                  <h3>
                    <span>Automatically Remove </span> Backgrounds
                  </h3>
                </div>
                <div className="pphoto">
                  <p className="pphoto">
                    Creating professional product photos can be a huge
                    challenge. Even in the most controlled studio environment,
                    blemishes are inevitable; supposedly white backgrounds are
                    never totally white.
                  </p>
                  <p className="pphoto">
                    backimg.bg gives your products the chance to shine against
                    completely clear photo backgrounds. Our AI makes your
                    product shine and sparkle in just 5 seconds with no clicks.
                  </p>
                </div>
              </div>
              <div className="custom-slider">
                {/*
	                	<div className='baSlider horizontal'>
                            <div className='frame'>
                                <div baSlider-handler>
                                   <img src={IMT} />
                                </div>
                                <div className='before'>
                                    <img src={TOMATO} />
                                </div>  
                                <div className='after'>
                                    <div>
                                  		<img src={TOMATO_AFTER} />
                                    </div>
                                </div>  
                            </div>
                        </div>
						*/}

                <div className="">
                  <ReactCompareSlider
                    handle={
                      <ReactCompareSliderHandle
                        buttonStyle={{
                          backdropFilter: undefined,
                          background: "white",
                          border: 0,
                          color: "#333",
                          // background: {IMT},
                        }}
                      />
                    }
                    itemOne={
                      <ReactCompareSliderImage src={TOMATO_AFTER} alt="one" />
                    }
                    itemTwo={<ReactCompareSliderImage src={TOMATO} alt="two" />}
                  />
                </div>



                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Increase conversion rates */}
      <div className="convrsation-section">
        <div className="container ">
          <div className="head">
            <h3>
              <span>Increase </span> Conversion Rates
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={LEFT} />
            </div>
            <div className="col-md-6">
              <img src={RIGHT} />
            </div>
            <div className="col-md-12">
              <div className="conversion-text ">
                <p className="">
                  By harmonizing images across your entire store, you remove
                  distractions. This means customers will focus on your products
                  and nothing else. It's a simple improvement that allows
                  customers to select items and place orders easier and more
                  often.
                </p>
                <p className="">
                  Along with increasing sales, remove.bg's clean backgrounds
                  improve customers' trust, help them compare products, increase
                  image capturing efficiency and reduce data preparation costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready for amazon... section */}
      <div className="partner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo-outer">
                <div className="row">
                  <div className="col-md-6">
                    <div className="logo-image">
                      <img src={logo1} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="logo-image">
                      <img src={logo2} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="logo-image border-line">
                      <img src={logo3} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="logo-image border-line">
                      <img src={logo4} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="logo-image">
                      <img src={logo5} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="logo-image">
                      <img src={logo6} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="partner-inner-content">
                <h2>
                  <span>Ready For </span> <br /> Amazon,
                  <br /> eBay & co.
                </h2>
                <p>
                  Product photos must meet the requirements of online
                  marketplaces. For example, all Amazon main images need pure
                  white backgrounds, while eBay requests solid white or
                  light-grey photo backgrounds from sellers.
                </p>
                <p>
                  There's a good reason marketplaces set these demands: they
                  help sell more items. Even if you are not on these particular
                  platforms, selling more is a good reason to clean-up your
                  photos.
                </p>
                <p>
                  And backimg.bg is the simplest way to go about doing that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Over */}

      {/* Save Time and Money */}
      <div className="video-section-ecommerce">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="ecoomarce-video">
                <img
                  data-toggle="modal"
                  data-target="#emcommarce"
                  src={VIDFRAME}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="save-money text-justify">
                <h2>
                  <span>Save Time </span> <br /> And Money
                </h2>
                <p>
                  How long does it take to manually cut out a product image?
                  Depending on the complexity, perhaps a minute? Or five, or
                  twenty? Even more?
                </p>
                <p>
                  With remove.bg you'll be done in 5 seconds; the process is
                  completely automatic.
                </p>
                <p>
                  In fact, you can do something else entirely while our
                  Artificial Intelligence gets rid of your image backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="emcommarce"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close video-pause-btn"
                data-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body vid-pop">
              <video width="760" height="430" controls>
                <source src={VID} type="video/mp4" />
                {/*<source src={require("../../styles/css/video/Upwork Ahmady.mp4.ogg")} type="video/ogg"/>*/}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* Money Time -- Ended*/}

      {/* Stunning Quality -- Start*/}
      <div className="emcommarce-sttuning">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="head">
                <h3>
                  {" "}
                  <span> Stunning </span> Quality
                </h3>
              </div>
              <div className="inner-content">
                <p>
                  Whether you cut out fashion, consumer packaged goods or other
                  product images, backimg.bg handles even the most challenging
                  edges, tiny details and other tricky conditions in an
                  exceptional manner.
                </p>

                <img src={GOGLE} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Stunning Quality -- Ended*/}

      {/*File Dropper*/}

      <div className="back-ground-upload">
        <div className="container">
          <div className="row">
            <div className="col-md-6 space-remove">
              <div className="direction-image">
                <img src={ARROW} />
              </div>

              <div className="image-upload ">
                <div className="Drop ">
                  <div
                    {...getRootProps({
                      className: "dropzone  dz-clickable ecommerce-dropzone",
                    })}
                  >
                    <input {...getInputProps()} />
                    <div className="dz-default dz-message">
                      <button className="dz-button" type="button">
                        Drop files here to upload
                      </button>
                    </div>
                  </div>

                  <aside>
                    <ul>{files}</ul>
                  </aside>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content-upload">
                <h6>Easily Remove</h6>
                <h3>
                  Background
                  <br />
                  from image
                </h3>
                <p>Powerful Background Remover</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of this Page*/}
    </div>
  );
};

export default Ecommerce;
