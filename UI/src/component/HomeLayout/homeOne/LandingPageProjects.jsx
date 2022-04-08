import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { portfolioSlick2 } from "../../../page-demo/script";

const TabOne = [
    {
        image: '01',
        imageSrc: '/assets/images/house-land/cooney.jpeg',
        bigImage: '/assets/images/house-land/cooney.jpeg',
        category: '01 Web Design',
        title: 'Cooney'
    },
    {
        image: '02',
        imageSrc: '/assets/images/house-land/medlar.jpeg',
        bigImage: '/assets/images/house-land/medlar.jpeg',
        category: 'Mobile App',
        title: 'The service provide for designer'
    },
    {
        image: '03',
        imageSrc: '/assets/images/house-land/basil.jpeg',
        bigImage: '/assets/images/house-land/basil.jpeg',
        category: 'Web Design',
        title: 'Mobile App landing Design'
    },
    {
        image: '04',
        imageSrc: '/assets/images/house-land/vista.jpeg',
        bigImage: '/assets/images/house-land/vista.jpeg',
        category: 'Mobile App',
        title: 'Logo Design creativity'
    },
    {
        image: '05',
        imageSrc: '/assets/images/house-land/colsium.jpeg',
        bigImage: '/assets/images/house-land/colsium.jpeg',
        category: 'Web Design',
        title: 'T-shirt design is the part of design'
    },
    {
        image: '06',
        imageSrc: '/assets/images/house-land/vanburn.jpeg',
        bigImage: '/assets/images/house-land/vanburn.jpeg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '06',
        imageSrc: '/assets/images/house-land/willowleaf.jpeg',
        bigImage: '/assets/images/house-land/willowleaf.jpeg',
        category: 'willowleaf',
        title: 'willowleaf'
    },
    {
        image: '06',
        imageSrc: '/assets/images/house-land/wolin.jpeg',
        bigImage: '/assets/images/house-land/wolin.jpeg',
        category: 'wolin',
        title: 'wolin'
    },
    {
        image: '06',
        imageSrc: '/assets/images/house-land/monomeath.jpeg',
        bigImage: '/assets/images/house-land/monomeath.jpeg',
        category: 'Monomeath',
        title: 'Monomeath'
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
                                    <Link className="btn-transparent rn-btn-dark" to="/house-designs"><span className="text">View All Home Designs</span></Link>
                                    {/* <a className="btn-transparent rn-btn-dark" href="/house-designs"><span className="text">View All Home Designs</span></a> */}
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
                                                    <Link to="/house-designs" >
                                                        <img src={`${value.imageSrc}`} alt="House & Land" />
                                                        {/* <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images" /> */}
                                                    </Link>
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