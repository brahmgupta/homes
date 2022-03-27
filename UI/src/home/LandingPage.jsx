import React, { Component, Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import AboutTwoKC from "../component/HomeLayout/homeOne/AboutTwoKC";
import LandingPageProjects from "../component/HomeLayout/homeOne/LandingPageProjects";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Header from "../component/header/HeaderKC";
import ModalVideo from 'react-modal-video';
import { videoTagString, VideoTag } from 'react-video-tag';
import Helmet from "../component/common/Helmet";
import WhereToBuild from "../elements/whereToBuild/WhereToBuild";
import FooterKC from "../component/footer/FooterKC";

videoTagString({ src: '/assets/images/service/video.mp4', poster: '/assets/images/bg/bg-image-24.jpg' })

const SlideList = [
    {
        textPosition: 'text-left',
        category: '',
        title: 'Kalwanu Constructions',
        description: 'Your trusted home builders',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

class LandingPage extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        const PostList = BlogContent.slice(0, 3);
        return (
            <Fragment>
                <Helmet pageTitle="Kalwanu Constructions" />
                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value, index) => (
                        <div className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                            {value.description ? <p className="description white">{value.description}</p> : ''}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="video-inner">
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='Hm-cM9SE8nk' onClose={() => this.setState({ isOpen: false })} />
                                            <button className="video-popup theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-background">
                                <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`} src={`${"/assets/images/service/Trimmed.mp4"}`} poster={`${"/assets/images/bg/bg-image-24.jpg"}`} />
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}


                </div>
                {/* End Slider Area   */}

                {/* Start Built on trust Area */}
                <div className="about-area bg_image--3">
                    <AboutTwoKC />
                </div>
                {/* End Built on trust Area */}

                {/* Start Testimonials Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--90 mb-0 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Testimonials Area */}

                {/* Start Where to build  */}
                <div className="service-area ptb--90  bg_image bg_image--3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h3>Find The Right Build Type For Your Needs</h3>
                                    <p>Building a new home made easy</p>
                                </div>
                            </div>
                        </div>
                        <WhereToBuild column="col-lg-4" teamStyle="" item="3" />
                    </div>
                </div>
                {/* End Where to build  */}


                {/* Start Projects Area */}
                <div className="portfolio-area ptb--90 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55 mb_sm--30">
                        <LandingPageProjects />
                    </div>
                </div>
                {/* End Projects Area */}

                {/* Start Blog Area */}
                {/* <div className="rn-blog-area pt--120 bg_color--1">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section-title text-left">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blog"><span className="text">View All News</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--30">
                            {PostList.map((value, i) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                {/* End Blog Area */}



                {/* Start Footer Area  */}
                <FooterKC />

                {/* <FooterTwo /> */}
                {/* End Footer Area  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default LandingPage;