import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
// import IMT from "../../../assets/images/ImtbhIo.png"
import PRODUCT from '../../../assets/images/product.jpg'
import PRODUCT_TRANS from '../../../assets/images/product-trans.jpg'
import CAR from '../../../assets/images/car.jpg'
import CAR_TRANS from '../../../assets/images/car-trans.jpg'
import MEN from '../../../assets/images/men-1.jpg'
import MEN_TRANS from '../../../assets/images/men-trans.jpg'
import ANIMAL from '../../../assets/images/animal.jpg'
import ANIMAL_TRANS from '../../../assets/images/animal-trans.jpg'
import GRAPHIC from '../../../assets/images/graphic.jpg'
import GRAPHIC_TRANS from '../../../assets/images/graphic-trans.jpg'

const StunningQuality = () => {
  return (
    <div>
      <div className="image-filter-section">
        <div className="container">
          <div className="head">
            <h3><span>Stunning </span>Quality</h3>
          </div>
          <div className="row desktop-view-slider left">
            <div className="col-md-2">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">People</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Products</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Animals</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Cars</a>
                <a className="nav-link" id="v-pills-graphics-tab" data-toggle="pill" href="#v-pills-graphics" role="tab" aria-controls="v-pills-graphics" aria-selected="false">Graphics</a>
              </div>
            </div>
            <div className="col-md-10">
              <div className="tab-content" id="v-pills-tabContent">
                {/* One */}
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="row">
                    <div className="col-md-12">
                      <ReactCompareSlider
                        handle={
                          <ReactCompareSliderHandle
                            buttonStyle={{
                              backdropFilter: undefined,
                              background: "hsla(0,0%,100%,.7)",
                              border: 0,
                              color: "#333",
                              // background: {IMT},
                            }}
                          />
                        }
                        itemOne={
                          <ReactCompareSliderImage src={MEN} alt="one" />
                        }
                        itemTwo={<ReactCompareSliderImage src={MEN_TRANS} alt="two" />}
                      />
                    </div>
                  </div>
                </div>

                {/* Two */}
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div className="row">
                    <div className="col-md-12">
                      <ReactCompareSlider
                        handle={
                          <ReactCompareSliderHandle
                            buttonStyle={{
                              backdropFilter: undefined,
                              background: "hsla(0,0%,100%,.7)",
                              border: 0,
                              color: "#333",
                              // background: {IMT},
                            }}
                          />
                        }
                        itemOne={
                          <ReactCompareSliderImage src={PRODUCT} alt="one" />
                        }
                        itemTwo={<ReactCompareSliderImage src={PRODUCT_TRANS} alt="two" />}
                      />
                    </div>
                  </div>
                </div>

                {/* Three  */}
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <div className="row">
                    <div className="col-md-12">
                      <ReactCompareSlider
                        handle={
                          <ReactCompareSliderHandle
                            buttonStyle={{
                              backdropFilter: undefined,
                              background: "hsla(0,0%,100%,.7)",
                              border: 0,
                              color: "#333",
                              // background: {IMT},
                            }}
                          />
                        }
                        itemOne={
                          <ReactCompareSliderImage src={ANIMAL} alt="one" />
                        }
                        itemTwo={<ReactCompareSliderImage src={ANIMAL_TRANS} alt="two" />}
                      />
                    </div>
                  </div>
                </div>
                {/* Four */}
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <div className="row">
                    <div className="col-md-12">
                      <ReactCompareSlider
                        handle={
                          <ReactCompareSliderHandle
                            buttonStyle={{
                              backdropFilter: undefined,
                              background: "hsla(0,0%,100%,.7)",
                              border: 0,
                              color: "#333",
                              // background: {IMT},
                            }}
                          />
                        }
                        itemOne={
                          <ReactCompareSliderImage src={CAR} alt="one" />
                        }
                        itemTwo={<ReactCompareSliderImage src={CAR_TRANS} alt="two" />}
                      />
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="v-pills-graphics" role='tabpanel' aria-labelledby='v-pills-graphics-tab'>
                <div className="row">
                    <div className="col-md-12">
                      <ReactCompareSlider
                        handle={
                          <ReactCompareSliderHandle
                            buttonStyle={{
                              backdropFilter: undefined,
                              background: "hsla(0,0%,100%,.7)",
                              border: 0,
                              color: "#333",
                              // background: {IMT},
                            }}
                          />
                        }
                        itemOne={
                          <ReactCompareSliderImage src={GRAPHIC} alt="one" />
                        }
                        itemTwo={<ReactCompareSliderImage src={GRAPHIC_TRANS} alt="two" />}
                      />
                    </div>
                  </div>
                </div>



              </div>
            </div>





          </div>
        </div>







      </div>

    </div>
    //   {/*            <div className="">
    // <ReactCompareSlider
    //   handle={
    //     <ReactCompareSliderHandle
    //       buttonStyle={{
    //         backdropFilter: undefined,
    //         background: "hsla(0,0%,100%,.7)",
    //         border: 0,
    //         color: "#333",
    //         // background: {IMT},
    //       }}
    //     />
    //   }
    //   itemOne={
    //     <ReactCompareSliderImage src={PRODUCT} alt="one" />
    //   }
    //   itemTwo={<ReactCompareSliderImage src={PRODUCT_TRANS} alt="two" />}
    // />
    //             </div>
    // */}

  );
};

export default StunningQuality;
