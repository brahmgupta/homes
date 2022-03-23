import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderKC";
import FooterKC from "../component/footer/FooterKC";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactKC extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--180 pb--190 bg_image bg-contact-us" data-black-overlay="6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className='inner text-left gallery-inner-kc'>
                                    <h1 className="title">Contact Us</h1>
                                    <p className="description white">We would like to hear from you!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">

                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address rn-address-kc">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Head Office - NSW</h4>
                                        <p>Unit 32, 15 Valediction Rd <br /> Kings Park, NSW - 2148</p>
                                    </div>
                                </div>


                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address rn-address-kc">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">VIC Office</h4>
                                        <p>3/16 Prosperity St <br /> Truganina VIC - 3029</p>
                                    </div>
                                </div>

                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address rn-address-kc">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">ACT Office</h4>
                                        <p>Unit 32, 15 Valediction Rd <br /> Kings Park, NSW - 2148</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--50 mt_sm--50">
                                <div className="rn-address rn-address-kc">
                                    <div className="icon">
                                        <FiHeadphones />
                                        <FiPhoneCall />

                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact With Phone Number</h4>
                                        <p><a href="tel:1800.960.101">1800 960 101</a></p>
                                        <p><a href="tel:+61 2 9052 9611">02 9052 9611</a></p>
                                    </div>
                                </div>

                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--50 mt_sm--50">
                                <div className="rn-address rn-address-kc">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="mailto:admin@kalwanuconstructions.com.au">admin@kalwanuconstructions.com.au</a></p>
                                        <p><a href="mailto:admin@kalwanuhomes.com.au">admin@kalwanuhomes.com.au</a></p>
                                    </div>
                                </div>

                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <FooterKC />

            </React.Fragment>
        )
    }
}
export default ContactKC