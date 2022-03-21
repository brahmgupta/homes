import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";

const TabOne = [
    {
        image: '01',
        imageSrc: '/assets/images/house-land/image-1.jpg',
        bigImage: '/assets/images/house-land/image-1.jpg',
        category: '01 Web Design',
        title: '01 Design is a creative part'
    },
    {
        image: '02',
        imageSrc: '/assets/images/house-land/image-2.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-02.jpg',
        category: 'Mobile App',
        title: 'The service provide for designer'
    },
    {
        image: '03',
        imageSrc: '/assets/images/house-land/image-3.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        category: 'Web Design',
        title: 'Mobile App landing Design'
    },
    {
        image: '04',
        imageSrc: '/assets/images/house-land/image-4.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        category: 'Mobile App',
        title: 'Logo Design creativity'
    },
    {
        image: '05',
        imageSrc: '/assets/images/house-land/image-5.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        category: 'Web Design',
        title: 'T-shirt design is the part of design'
    },
    {
        image: '06',
        imageSrc: '/assets/images/house-land/image-6.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
]

class LandingPageProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }

    render() {

        const { tab1, isOpen } = this.state;


        let title = 'Home Designs',
            description = 'Create your dream home with Kalwanu Homes range of quality home designs to suit your needs.';
        return (
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/house-designs"><span className="text">View All Home Designs</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Slider {...portfolioSlick2}>
                            {TabOne.map((value, index) => (
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: false, tab1: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                    <img src={`${value.imageSrc}`} alt="House & Land" />

                                                        {/* <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images" /> */}
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default LandingPageProjects;