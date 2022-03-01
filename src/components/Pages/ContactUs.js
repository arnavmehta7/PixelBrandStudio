const ContactUs = () => {
    return (
        <div>
            <section className="contactbar">
                <div className="container">
                    <h2>
                        Got questions?
                        <br />
                        We'll answer.
                    </h2>
                    <p>
                        Do you have a question about backimg.bg? <br />
                        Check out our
                        <a href="#">FAQ</a> and <a href="#">help center.</a>
                    </p>
                </div>
            </section>

            <div className="contactform">
                <div className="container">
                    <form>
                        <h4>
                            Fill out this form and we will get back to you
                            shortly.
                        </h4>
                        <div className="row left">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="mail">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mail"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="mail">Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Subject"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="mail">Message</label>
                                    <textarea
                                        type="text"
                                        rows="3"
                                        className="form-control"
                                        id="Message"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 formbtn text-center">
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                >
                                    Send Message
                                </button>
                                <p>
                                    This form is protected by hCaptcha and its
                                    <br />
                                    <b>
                                        {" "}
                                        <a href="#">Privacy Policy</a>
                                    </b>{" "}
                                    and{" "}
                                    <b>
                                        <a href="#">Terms of Service</a>
                                    </b>{" "}
                                    apply.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ContactUs;
