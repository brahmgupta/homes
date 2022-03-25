import React, { Component } from 'react'
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderKC";
import Footer from "../component/footer/FooterKC";
import { FaBed, FaBath, FaCar, FaCouch, FaArrowsAltH } from "react-icons/fa";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [
    {
        title: 'Cooney',
        bigImage: '/assets/images/house-land/cooney.jpeg',
        width: '14',
        depth: '28',
        size: '30',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '2' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '14m' },
        ]
       
    },
    {
        title: 'Medlar',        
        bigImage: '/assets/images/house-land/medlar.jpeg',
        width: '12.5',
        depth: '26',
        size: '36',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '3' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '2' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        title: 'Basil',
        bigImage: '/assets/images/house-land/basil.jpeg',
        width: '12.5',
        depth: '26',
        size: '28',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '1' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        title: 'Vista',        
        bigImage: '/assets/images/house-land/vista.jpeg',
        width: '12.5',
        depth: '26',
        size: '28',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '1' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        title: 'Colsium',        
        bigImage: '/assets/images/house-land/colsium.jpeg',
        width: '12.5',
        depth: '26',
        size: '28',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '1' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        title: 'Vanburn',        
        bigImage: '/assets/images/house-land/vanburn.jpeg',
        width: '12.5',
        depth: '26',
        size: '28',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '1' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        title: 'Willowleaf',        
        bigImage: '/assets/images/house-land/willowleaf.jpeg',
        width: '12.5',
        depth: '26',
        size: '28',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '1' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        title: 'Wolin',        
        bigImage: '/assets/images/house-land/wolin.jpeg',
        width: '12.5',
        depth: '26',
        size: '28',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '1' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    },
    {
        title: 'Monomeath',        
        bigImage: '/assets/images/house-land/monomeath.jpeg',
        width: '12.5',
        depth: '26',
        size: '28',
        config: [
            { title: 'Bedroom', asset: <FaBed />, text: '4' },
            { title: 'Bath', asset: <FaBath />, text: '2' },
            { title: 'Carpark', asset: <FaCar />, text: '2' },
            { title: 'Living', asset: <FaCouch />, text: '1' },
            { title: 'Lot width', asset: <FaArrowsAltH />, text: '12.5m' },
        ]
    }
    
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
                {/* <Breadcrumb title={'Gallery'} /> */}
                <div className="breadcrumb-area rn-bg-color ptb--180 bg_image bg-image-gallery" data-black-overlay="5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className='inner text-left gallery-inner-kc'>
                                    <h1 className="title">Home Designs</h1>
                                    <p className="description white">Your family is one-of-a-kind, why not design a home that reflects that</p>
                                    {/* <p className="description white">Your family is unique, so why not create a unique home that completely matches your needs</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">

                    <div class="section-title text-center service-style--3 mb--30 mb_sm--0 gallery-title-kc">
                        <h3 class="title">House and Land packages - NSW, VIC & ACT</h3>
                        <p className='description'>Our house and property packages are catered for all budgets and lifestyles. Call us today so we can get started on tailoring the package that’s right for you!</p>
                        {/* <p className='description' >Our house and land packages are suited to all budgets and lifestyles. Call us today so we can get started on tailoring the package that’s right for you!</p> */}
                    </div>

                    {/* Start Filter Area  */}
                    <div className='filter plr--30'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-4 col-lg-3 filter-block'>
                                <p>
                                    Storey
                                </p>
                                <ul>
                                    <li>
                                        <a class="rn-btn active">Any</a>
                                    </li>
                                    <li>
                                        <a class="rn-btn">Single</a>
                                    </li>
                                    <li>
                                        <a class="rn-btn">Double</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-sm-12 col-md-4 col-lg-2 filter-block'>
                                <p>
                                    Bedrooms
                                </p>
                                <ul>
                                    <li>
                                        <a class="rn-btn active">Any</a>
                                    </li>                                    <li>
                                        <a class="rn-btn">3</a>
                                    </li>
                                    <li>
                                        <a class="rn-btn">4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-sm-12 col-md-4 col-lg-3 filter-block'>
                                <p>
                                    Bathrooms
                                </p>
                                <ul>
                                    <li>
                                        <a class="rn-btn active">Any</a>
                                    </li>
                                    <li>
                                        <a class="rn-btn">2</a>
                                    </li>
                                    <li>
                                        <a class="rn-btn">3</a>
                                    </li>
                                    <li>
                                        <a class="rn-btn">4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-2 filter-block block-width'>
                                <p>
                                    Min Block width
                                </p>
                                <select name="blockWidth" id="blockWidth">
                                    <option value="">Block Width</option>
                                    <option value="8.5">8.5</option>
                                    <option value="10.5">10.5</option>
                                    <option value="12.5">12.5</option>
                                    <option value="14">14</option>
                                    <option value="16">16</option>
                                    <option value="18">18</option>
                                    <option value="20">20</option>
                                    <option value="22">22</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* End Filter Area  */}

                    {/* Start Portfolio Area  */}
                    <div className="rn-portfolio-area bg_color--1 mb--120">
                        {/* <div className="container"> */}
                        <div className='plr--30' >
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
                                                <div className="portfolio-static portfolio-static-kc with-shadow">
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
                                                                        <h3 className='title plan-name'>{value.title || 'K Home'}</h3>
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
                                                                                <span className='kc-icon' title={val.title}>{val.asset}</span>
                                                                                <span className='kc-icon-value'>{val.text}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            }
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