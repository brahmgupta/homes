import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderKC";
import Footer from "../component/footer/FooterKC";


class AboutKC extends Component{
    render(){
        let title = 'About';
        
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--260 pb--190 bg_image bg-about-us" data-black-overlay="6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className='inner text-left gallery-inner-kc'>
                                    <h1 className="title">About Us</h1>
                                    {/* <p className="description white">We would like to hear from you!</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--5">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail thumbnail-border">
                                        <img className="w-100" src="/assets/images/house-land/about-us2.jpg" alt="About Us"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description description-kc">
                                            We are a construction company headquartered in Kings Park, NSW AUSTRALIA. We have operations in the states of <b>NSW</b>, <b>VIC</b> and <b>ACT</b>.
                                        </p>
                                        <p className="description description-kc">Build your luxury home with a family like yours. We never forget the importance of what we do – creating a home for your family to love.</p>
                                   
                                            {/* <p className="description">{description}</p> */}
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Community</h3>
                                                    <p>We at Kalwanu Constructions deeply care for our future generations. We have partnered with Quakers Hill Junior Soccer Club to promote the game we all deeply love and promote healthy lifestyle among kids.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Honesty</h3>
                                                    <p>We at Kalwanu believe that relations and businesses are built upon honesty. We have built this business in the last 10 years with honesty at its core with all our customers, partners and vendors. Whilst we agree change is constant, however the core principle of our business shall always be static – HONESTY</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--90 mb-0 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                 {/* Start CounterUp Area */}
                 {/* <div className="rn-counterup-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default AboutKC