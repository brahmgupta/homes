import React, { Component } from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterKC";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaBed, FaBath, FaCar, FaCouch,FaArrowsAltH } from "react-icons/fa";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const PortfolioList = [
    {
        images: '7',
        category: 'Freelancer',
        title: 'The Language of Developer'
    },
    {
        images: '1',
        category: 'Freelancer',
        title: 'The new Thinking for Design'
    },
    {
        images: '2',
        category: 'Freelancer',
        title: 'The new Thinking for Design'
    },
    {
        images: '3',
        category: 'Freelancer',
        title: 'Getting tickets to the big show'
    },
    {
        images: '8',
        category: 'Freelancer',
        title: 'You can see your Portfolio'
    },
    {
        images: '9',
        category: 'Freelancer',
        title: 'Getting tickets to the big show'
    },
]


const TabOne = [
    {
        image: '01',
        bigImage: '/assets/images/house-land/kc-1.jpeg',
        category: 'Web Design',
        title: 'Design is a creative part',
        width: '12.5', 
        depth: '26',
        size: '28',
        config: [
            { asset: <FaBed />, text: '4' },
            { asset: <FaBath />, text: '2' },
            { asset: <FaCar />, text: '2' },
            { asset: <FaCouch />, text: '1' },
            { asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        image: '02',
        bigImage: '/assets/images/house-land/kc-2.jpeg',
        category: 'Mobile App',
        title: 'The service provide for designer',
        subTitle: 'Fits lot: 12.5m x 26m',
        config: [
            { asset: <FaBed />, text: '4' },
            { asset: <FaBath />, text: '2' },
            { asset: <FaCar />, text: '2' },
        ]
    },
    {
        image: '03',
        bigImage: '/assets/images/house-land/kc-3.jpeg',
        category: 'Web Design',
        title: 'Mobile App landing Design',
        subTitle: 'Fits lot: 12.5m x 26m',
        config: [
            { asset: <FaBed />, text: '4' },
            { asset: <FaBath />, text: '2' },
            { asset: <FaCar />, text: '2' },
        ]
    },
    {
        image: '04',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        category: 'Mobile App',
        title: 'Logo Design creativity',
        config: [
            { asset: <FaBed />, text: '4' },
            { asset: <FaBath />, text: '2' },
            { asset: <FaCar />, text: '2' },
        ]
    },
    {
        image: '05',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        category: 'Web Design',
        title: 'T-shirt design is the part of design'
    },
    {
        image: '06',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
]

const config = [
    { asset: <FaBed />, text: '4' },
    { asset: <FaBath />, text: '2' },
];

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
    { Social: <FaBed />, link: 'https://twitter.com/' },
]

class GalleryKC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        return (
            <div>

                <PageHelmet pageTitle='Gallery' />

                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Gallery'} />
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">

                    {/* Start Portfolio Area  */}
                    <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
                        <div className="container">
                            <div className="row">
                                {TabOne.map((value, index) => (
                                    <div className="col-lg-4" key={index}>
                                        {isOpen && (
                                            <Lightbox
                                                mainSrc={TabOne[tab1].bigImage}
                                                nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                                prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                                onCloseRequest={() => this.setState({ isOpen: false })}
                                                onMovePrevRequest={() =>
                                                    this.setState({
                                                        tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                                    })
                                                }
                                                onMoveNextRequest={() =>
                                                    this.setState({
                                                        tab1: (tab1 + 1) % TabOne.length,
                                                    })
                                                }
                                            />
                                        )}
                                        <div className="item-portfolio-static home-design-card">
                                            <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                                <div className="portfolio-static with-shadow">
                                                    <div className="thumbnail-inner">
                                                        <div className="thumbnail">
                                                            <a href="#portfolio-details">
                                                                {/* <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/> */}
                                                                <img src={`${value.bigImage}`} alt="Portfolio Images" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content home-design-card-content">
                                                        <div className="inner2">
                                                            <div className="content-header">
                                                                <div className='row'>
                                                                    <div className='col-sm-6'>
                                                                        <h4 className='title plan-name'>Plan Name</h4>
                                                                    </div>
                                                                    <div className='col-sm-6 text-right'>
                                                                        <span>{value.size}sq</span>
                                                                    </div>
                                                                </div>
                                                                <span>Fits lot: {value.width}m x {value.depth}m</span>
                                                            </div>

                                                            {value.config &&
                                                                <div className="social-share-inner">
                                                                    <ul className="social-share social-style--2 d-flex justify-content-around liststyle mt--15">
                                                                        {value.config.map((val, i) => (
                                                                            <li key={i} className='text-center'>
                                                                                <span className='kc-icon'>{val.asset}</span>
                                                                                <span>{val.text}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>

                                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                                        {SocialShare.map((val, i) => (
                                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            }
                                                            <p>{value.category}</p>
                                                            <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area  */}

                    {/* Start Portfolio Area  */}
                    <div className="creative-portfolio-wrapper ptb--120 bg_color--1">
                        <div className="container plr--10">
                            <div className="row row--5">
                                {PortfolioList.map((value, i) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={i}>
                                        <div className="portfolio-style--3">
                                            <div className="thumbnail">
                                                <a href="/portfolio-details">
                                                    <img className="w-100" src={`/assets/images/portfolio/portfolio-${value.images}.jpg`} alt="Portfolio Images" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <p className="portfoliotype">{value.category}</p>
                                                <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                                <div className="portfolio-btn">
                                                    <a className="rn-btn text-white" href="/portfolio-details">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area  */}

                </main>
                {/* End Page Wrapper  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                {/* Start Footer Area  */}
                <Footer />
                {/* End Footer Area  */}
            </div>
        )
    }
}


export default GalleryKC;