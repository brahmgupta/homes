import React, { Component } from "react";
import { FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/Kalwanuconstructions/' },
    { Social: <FaYoutube />, link: 'https://www.youtube.com/channel/UC4ALZiufb9aLofKSVXStOjA' },
]

class FooterKC extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-sm-12">
                                <div className="footer-right footer-kc" data-black-overlay="6">
                                    <div className="row">

                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h3>Contact Us</h3>
                                                <h4 className="h4-sm" >Head Office (Sydney)</h4>
                                                <ul className="ft-link ft-link-sm">
                                                    <li>Unit 32, 15 Valediction Rd Kings Park, NSW 2148</li>
                                                </ul>

                                                <h4 className="h4-sm">Melbourne Office</h4>
                                                <ul className="ft-link ft-link-sm">
                                                    <li>5/1 Network Dr Truganina, VIC 3029</li>
                                                </ul>

                                                <h4 className="h4-sm">ACT Office</h4>
                                                <ul className="ft-link ft-link-sm">
                                                    <li>5/1 Network Dr Truganina, VIC 3029</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h3>&nbsp;</h3>
                                                <ul className="ft-link">
                                                    <li><FiPhoneCall />&nbsp;&nbsp;&nbsp;<a href="tel:1800.960.101">1800 960 101</a></li>
                                                    <li><FaEnvelope />&nbsp;&nbsp;&nbsp;<a href="mailto:admin@kalwanuconstructions.com.au">admin@kalwanuconstructions.com.au</a></li>
                                                    <li><FaEnvelope />&nbsp;&nbsp;&nbsp;<a href="mailto:admin@kalwanuhomes.com.au">admin@kalwanuhomes.com.au</a></li>
                                                </ul>
                                                {/* <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val, i) => (
                                                            <li key={i}><a href={`${val.link}`} target='_blank'>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> */}
                                                <div className="inner pt-4">
                                                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle">
                                                        {SocialShare.map((val, i) => (
                                                            <li className="mr-3" key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="copyright-text copyright-text-kc">
                                                <p>Copyright © 2021 Kalwanu Constructions. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default FooterKC;