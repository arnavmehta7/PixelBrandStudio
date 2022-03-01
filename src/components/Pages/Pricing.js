import { Link } from "react-router-dom";
import INFO from "../../assets/images/info-icon.png"

const Pricing = () => {
  return (
    <div>
      <div className="home-banner pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-title">
                <h2>
                  <span>Get full</span> resulation images
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="main-pricing-list price-two-col">
              <div className="pricing-list free-account">
                <div className="best-value">
                  <span>
                    Best <br /> value
                  </span>
                </div>
                <h3>Subscription Plan</h3>

                <div className="main-subscripation-plan">
                  <div className="list-subscribe-price">
                    <div className="main-price-sub">
                      <div className="row">
                        <div className="col-md-12">
                          <h2 id="sub-single-price">
                            £ EUROS<span>/Image</span>
                          </h2>
                          <div className="Subscribe-button">
                            <a href="/login">Subscribe Now</a>{" "}
                          </div>
                          <p>
                            £ <span id="sub-price-mnth">220</span> per month,
                            price incl. VAT, if applicable
                          </p>
                          <div className="dahsted-border-line"></div>
                        </div>
                        <div className="bottom-instuction">
                          <ul>
                            <li>
                              <span>Risk free :</span> 14 Days Money Back
                              Guarantee{" "}
                              <span className="info-i">
                                <img src={INFO} />
                              </span>
                            </li>
                            <li>
                              <span>Flexible :</span> Downgrade, upgrade or
                              cancel any time{" "}
                              <span className="info-i">
                                <img src={INFO} />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-list pay-as">
                <h3>Pay as you go</h3>

                <div className="list-subscribe-price">
                  <div className="row">


                    <div className="col-md-4">
                      <input
                        type="radio"
                        className="pay-plans-radio"
                        id="21-credits"
                        name="pay_plan"
                        value="21"
                        price="80"
                        per-image="0.8"
                        checked=""
                      />
                      <label for="21-credits ">100 Photos </label>
                    </div>


                    <div className="col-md-4">£ 80</div>
                    <div className="col-md-4">£ 0.8 / image</div>
                  </div>
                  <div className="row">
				<div className="col-md-4">
				<input type="radio" className="pay-plans-radio" id="20-credits" name="pay_plan" value="20" price="50" per-image="1" checked=""/>
				<label for="20-credits">50 Photos </label>
				</div>
				<div className="col-md-4">
				£ 50
				</div>
				<div className="col-md-4">
				£ 1 / image
				</div>
				</div>





                  <div className="main-price-sub">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 id="pay-single-img-price">
                          £ EUROS<span>/Image</span>
                        </h2>
                        <div className="Subscribe-button">
                          <a href="/login">Buy Now</a>{" "}
                        </div>
                        <p>
                          £ <span id="pay-price-single">80</span> one-time
                          payment, price incl. VAT, if applicable
                        </p>
                        <div className="dahsted-border-line"></div>
                      </div>
                      <div className="bottom-instuction">
                        <ul>
                          <li>
                            Credits available for use
                            <br />
                            anytime within two years of purchase.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Faq Section*/}
      <div className="faq-section" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="head">
                <h3>
                  <span>Frequently</span> asked questions
                </h3>
              </div>
              <div className="faq-contnet left">
                <div className="accordion" id="faq-questions">
                  <div className="card">
                    <div className="card-header" id="heading-1">
                      <button
                        className="btn btn-link btn-block text-left butn collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-1"
                        aria-expanded="true"
                        aria-controls="qs-1"
                      >
                        Is it more preferable to get pay-as-you-go credits or
                        buy a subscription?{" "}
                      </button>
                    </div>
                    <div
                      id="qs-1"
                      className="collapse"
                      aria-labelledby="heading-1"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        Pay-as-you-go is the best option for once in a while
                        image needs or when pictures are slightly complex.{" "}
                        <br />
                        Whereas, for large and active image needs, the best
                        option is to acquire a subscription. Your plan entitles
                        you to a certain amount of images per month along with a
                        rollover of any unused credits. The plan ensures you
                        save without committing entirely.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-2">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-2"
                        aria-expanded="false"
                        aria-controls="qs-2"
                      >
                        What are credits?
                      </button>
                    </div>
                    <div
                      id="qs-2"
                      className="collapse"
                      aria-labelledby="heading-2"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        Credits fulfill the job of producing top-quality cutouts
                        in the highest resolution. The site allows credits to be
                        used in any operating system i.e., Windows / Mac / Linux
                        app or Photoshop Extension. <br />
                        Further, except for free preview images, removing
                        background from a single image deducts 1 credit.
                        Subscriptions also come with certain monthly credits
                        which you can either use within that month or the
                        following month so long as you stay subscribed. All
                        credits under the pay-as-you-go package have a validity
                        of 2 years from the date of purchase.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-3">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-3"
                        aria-expanded="false"
                        aria-controls="qs-3"
                      >
                        What images are supported?
                      </button>
                    </div>
                    <div
                      id="qs-3"
                      className="collapse"
                      aria-labelledby="heading-3"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        The tool works with image formats such as JPG or PNG up
                        to 12 megabytes. The uploaded image must consist of a
                        noticeable figure(s) in the forefront, be it a person,
                        place, animal, or inanimate object.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-4">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-4"
                        aria-expanded="false"
                        aria-controls="qs-4"
                      >
                        What are preview images?
                      </button>
                    </div>
                    <div
                      id="qs-4"
                      className="collapse"
                      aria-labelledby="heading-4"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        Preview images are thumbnail-sized image files with
                        relatively lower pixels than regular images. They
                        require half the credit amount of a regular image (i.e.,
                        ¼ credit only) and are also free.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-5">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-5"
                        aria-expanded="false"
                        aria-controls="qs-5"
                      >
                        Can I cancel/upgrade/downgrade my subscription?
                      </button>
                    </div>
                    <div
                      id="qs-5"
                      className="collapse"
                      aria-labelledby="heading-5"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        However, the remaining subscription credits cannot be
                        used after the cancellation of a subscription.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-6">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-6"
                        aria-expanded="false"
                        aria-controls="qs-6"
                      >
                        What if I'm unsatisfied with the results?
                      </button>
                    </div>
                    <div
                      id="qs-6"
                      className="collapse"
                      aria-labelledby="heading-6"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        Although we are determined to deliver satisfactory
                        results, some pictures might not turn out perfect due to
                        near-imperceptible backgrounds, poor quality, etc. For
                        that reason, you are recommended to try out the free
                        version first and see whether the quality level pleases
                        you. <br />
                        According to our subscription policy, you can get a
                        refund within 14 days in case you’re unsatisfied with
                        the results (limited to 50 downloads).
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-7">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-7"
                        aria-expanded="false"
                        aria-controls="qs-7"
                      >
                        What happens if I don’t use all my subscription credits
                        each month?
                      </button>
                    </div>
                    <div
                      id="qs-7"
                      className="collapse"
                      aria-labelledby="heading-7"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        If your subscription credits remain unused by the end of
                        a month, they will simply be added on to the next month,
                        and repeatedly thereafter from one period to the next
                        until used. There is no limit to the number of credits
                        that can be saved up. However, you lose all your credits
                        after the cancellation of a subscription.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-8">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#qs-8"
                        aria-expanded="false"
                        aria-controls="qs-8"
                      >
                        What happens after I run out of credits?
                      </button>
                    </div>
                    <div
                      id="qs-8"
                      className="collapse"
                      aria-labelledby="heading-8"
                      data-parent="#faq-questions"
                    >
                      <div className="card-body">
                        After you've utilized all your credits, you’d be unable
                        to use background removals until next month. You shall
                        be notified once you reach 80% of your credit usage.
                        Thereafter, you will have the option of either upgrading
                        your plan or purchasing a pay-as-you-go package for more
                        credits.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*End Part*/}
      <div className="help-section" id="help-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="head mt-3">
                <h3>
                  <span>We are</span> here to help.
                </h3>
              </div>
              <div className="help-inner-content">
                <h2>
                  Need to process more than <br />
                  100,000 images per year?
                </h2>
                <p>
                  Check out our flexible enterprise solutions
                  <br />
                  and get in touch for a custom quote.
                </p>
              </div>
              <div className="help-autor-deatils">
                <div className="author-content">
                  <Link
                    className="btn btn-primary button-contact"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;

/*<div className="col-md-12">
					<div className="main-pricing-list price-two-col">
						<div className="pricing-list free-account">
							<div className="best-value"><span>Best <br/> value</span>
							</div>
							<h3>Subscription Plan</h3>


							<div className="main-subscripation-plan">
							<div className="list-subscribe-price">
								<div className="row">
									<div className="col-md-5">
										<input type="radio" className="sub-plans-radio" id="8-credits" name="plan_id" value="8" price="7" per-image="0.44" checked=""/>
										<label for="8-credits">16 Photos</label>
										</div>
									<div className="col-md-3">
										£ 7
										</div>	
									<div className="col-md-4">
									£ 0.44 / image
									</div>		
								</div>	
								<div className="row">
								<div className="col-md-5">
								<input type="radio" className="sub-plans-radio" id="9-credits" name="plan_id" value="9" price="15" per-image="0.41" checked=""/>
								<label for="9-credits">37 Photos </label>
								</div>
								<div className="col-md-3">
									£ 15
									</div>
									<div className="col-md-4">
									£ 0.41 / image
									</div>
									</div>	

								<div className="row">
									<div className="col-md-5">
									<input type="radio" className="sub-plans-radio" id="10-credits" name="plan_id" value="10" price="23" per-image="0.38" checked=""/>
									<label for="10-credits">60 Photos </label>
									</div>
									<div className="col-md-3">
									£ 23
									</div>
									<div className="col-md-4">
									£ 0.38 / image
									</div>
									</div>


								<div className="row">
									<div className="col-md-5">
									<input type="radio" className="sub-plans-radio" id="13-credits" name="plan_id" value="13" price="35" per-image="0.35" checked=""/>
									<label for="13-credits">100 Photos </label>
									</div>
									<div className="col-md-3">
									£ 35
									</div>
									<div className="col-md-4">
									£ 0.35 / image
									</div>
									</div>


								<div className="row">
									<div className="col-md-5">
									<input type="radio" className="sub-plans-radio" id="14-credits" name="plan_id" value="14" price="55" per-image="0.28" checked=""/>
									<label for="14-credits">200 Photos </label>
									</div>
									<div className="col-md-3">
									£ 55
									</div>
									<div className="col-md-4">
									£ 0.28 / image
									</div>
									</div>
								<div className="row">
									<div className="col-md-5">
										<input type="radio" className="sub-plans-radio" id="15-credits" name="plan_id" value="15" price="125" per-image="0.25" checked=""/>
										<label for="15-credits">500 Photos </label>
									</div>
									<div className="col-md-3">
									£ 125
									</div>
									<div className="col-md-4">
									£ 0.25 / image
									</div>
									</div>

								<div className="row">
									<div className="col-md-5">
									<input type="radio" className="sub-plans-radio" id="16-credits" name="plan_id" value="16" price="220" per-image="0.22" checked=""/>
									<label for="16-credits">1000 Photos </label>
									</div>
									<div className="col-md-3">
									£ 220
									</div>
									<div className="col-md-4">
									£ 0.22 / image
									</div>
									</div>

							<div className="main-price-sub">
										<div className="row">
											<div className="col-md-12">
												<h2 id="sub-single-price">£ 0.22<span>/image</span></h2>
												<div className="Subscribe-button">
													<a href="/login">Subscribe Now</a>												</div>
												<p>£ <span id="sub-price-mnth">220</span> per month, price incl. VAT, if applicable</p>
												<div className="dahsted-border-line"></div>
											</div>
											<div className="bottom-instuction">
												<ul>
													<li><span>Risk free :</span> 14 Days Money Back Guarantee <span className="info-i">
													<img src="css/images/info-icon.png"/></span>
													</li>
													<li><span>Flexible :</span> Downgrade, upgrade or cancel any time <span className="info-i">
													<img src="css/images/info-icon.png"/></span>
													</li>
												</ul>
											</div>
										</div>
									</div>

							</div>
							</div>
					</div>
				<div className="pricing-list pay-as">
														<h3>Pay as you go</h3>

				<div className="list-subscribe-price">
				<div className="row">
					<div className="col-md-5">
					<input type="radio" className="pay-plans-radio" id="17-credits" name="pay_plan" value="17" price="9" per-image="2.25" checked=""/>
					<label for="17-credits">4 Photos </label>
					</div>
					<div className="col-md-3">
					£ 9
					</div>
					<div className="col-md-4">
					£ 2.25 / image
					</div>
					</div>

					<div className="row">
						<div className="col-md-5">
						<input type="radio" className="pay-plans-radio" id="18-credits" name="pay_plan" value="18" price="20" per-image="2" checked=""/>
						<label for="18-credits">10 Photos </label>
						</div>
						<div className="col-md-3">
						£ 20
						</div>
						<div className="col-md-4">
						£ 2 / image
						</div>
						</div>

				<div className="row">
				<div className="col-md-5">
				<input type="radio" className="pay-plans-radio" id="19-credits" name="pay_plan" value="19" price="37" per-image="1.48" checked=""/>
				<label for="19-credits">25 Photos </label>
				</div>
				<div className="col-md-3">
				£ 37
				</div>
				<div className="col-md-4">
				£ 1.48 / image
				</div>
				</div>
				<div className="row">
				<div className="col-md-5">
				<input type="radio" className="pay-plans-radio" id="20-credits" name="pay_plan" value="20" price="50" per-image="1" checked=""/>
				<label for="20-credits">50 Photos </label>
				</div>
				<div className="col-md-3">
				£ 50
				</div>
				<div className="col-md-4">
				£ 1 / image
				</div>
				</div>
				<div className="row">
					<div className="col-md-5">
					<input type="radio" className="pay-plans-radio" id="21-credits" name="pay_plan" value="21" price="80" per-image="0.8" checked=""/>
					<label for="21-credits">100 Photos </label>
					</div>
					<div className="col-md-3">
					£ 80
					</div>
					<div className="col-md-4">
					£ 0.8 / image
					</div>
					</div>
				<div className="main-price-sub">
									<div className="row">
										<div className="col-md-12">
											<h2 id="pay-single-img-price">£ 0.8<span>/image</span></h2>
											<div className="Subscribe-button">
												<a href="/login">Buy Now</a>											</div>
											<p>£ <span id="pay-price-single">80</span> one-time payment, price incl. VAT, if applicable</p>
											<div className="dahsted-border-line"></div>
										</div>
										<div className="bottom-instuction">
											<ul>
												<li>Credits available for use<br/>anytime within two years of purchase.</li>
											</ul>
										</div>
									</div>
								</div>
				</div>

							</div>	
					</div>
					</div> */
