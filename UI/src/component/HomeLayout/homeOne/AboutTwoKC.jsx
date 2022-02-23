import React, { Component } from "react";

class AboutTwoKC extends Component {
    render() {
        let title = 'Built on trust',
            description = 'We are a construction company headquartered in Kings Park, NSW AUSTRALIA. We have operations in the states of NSW, VIC and ACT.';
        return (
            <React.Fragment>
                <div className="about-wrapper ptb--90">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail thumbnail-kc">
                                    <img className="w-100" src="/assets/images/building/build-on-trust.jpg" alt="Build on trust" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description description-kc">
                                            We are a construction company headquartered in Kings Park, NSW AUSTRALIA. We have operations in the states of <b>NSW</b>, <b>VIC</b> and <b>ACT</b>.
                                        </p>
                                        <p className="description description-kc">Build your luxury home with a family like yours. We never forget the importance of what we do – creating a home for your family to love.</p>
                                    </div>
                                    {/* <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Who we are</h3>
                                                <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Who we are</h3>
                                                <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutTwoKC;