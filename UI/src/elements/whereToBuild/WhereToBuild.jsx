import React from 'react'
import data from "./data";
import { Link } from "react-router-dom";

const WhereToBuild = (props) => {
    const itemSlice = data.slice(0, 3)
    return (
        <div className="row">
            <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={1}>
                <div className={`portfolio text-left mt--40`}>
                    <div className="thumbnail-inner no-bg">
                        <div className={`thumbnail image-mu`}></div>
                        <div className={`bg-blr-image image-mu`}></div>
                    </div>
                    <div className="content wtb">
                        <div className="inner">
                            {/* <p>Development</p> */}
                            {/* <h4><a href="/portfolio-details">Unit or Townhouse</a></h4> */}
                             <h4><a class="btn-no-transparent rn-btn-dark" href="/house-designs"><span class="text">Units or Townhouse</span></a></h4>
                            {/* <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">View Details</a>
                            </div> */}
                        </div>
                    </div>
                    <Link className="link-overlay" to="/house-designs"></Link>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={2}>
                <div className={`portfolio text-left mt--40`}>
                    <div className="thumbnail-inner no-bg">
                        <div className={`thumbnail image-ch`}></div>
                        <div className={`bg-blr-image image-ch`}></div>
                    </div>
                    <div className="content wtb">
                        <div className="inner">
                            {/* <p>Development</p> */}
                            {/* <h4><a href="/portfolio-details">Unit or Townhouse</a></h4> */}
                            <h4><a class="btn-no-transparent rn-btn-dark" href="/house-designs"><span class="text">Custom Home</span></a></h4>
                            {/* <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">View Details</a>
                            </div> */}
                        </div>
                    </div>
                    <Link className="link-overlay" to="/house-designs"></Link>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={3}>
                <div className={`portfolio text-left mt--40`}>
                    <div className="thumbnail-inner no-bg">
                        <div className={`thumbnail image-hl`}></div>
                        <div className={`bg-blr-image image-hl`}></div>
                    </div>
                    <div className="content wtb">
                        <div className="inner">
                            {/* <p>Development</p> */}
                            {/* <h4><a href="/portfolio-details">Unit or Townhouse</a></h4> */}
                            <h4><a class="btn-no-transparent rn-btn-dark" href="/house-designs"><span class="text">House & Land</span></a></h4>
                            {/* <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">View Details</a>
                            </div> */}
                        </div>
                    </div>
                    <Link className="link-overlay" to="/house-designs"></Link>
                </div>
            </div>
            {/* <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={2}>
                <div className={`portfolio text-left mt--40`}>
                    <div className="thumbnail-inner">
                        <div className={`thumbnail image-mu`}></div>
                        <div className={`bg-blr-image image-mu`}></div>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <p>Development</p>
                            <h4><a href="/portfolio-details">Custom House</a></h4>
                            <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">View Details</a>
                            </div>
                        </div>
                    </div>
                    <Link className="link-overlay" to="/portfolio-details"></Link>
                </div>
            </div> */}
            {/* <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={2}>
                <div className={`portfolio text-left mt--40`}>
                    <div className="thumbnail-inner">
                        <div className={`thumbnail image-mu`}></div>
                        <div className={`bg-blr-image image-mu`}></div>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <p>Development</p>
                            <h4><a href="/portfolio-details">Custom House</a></h4>
                            <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">View Details</a>
                            </div>
                        </div>
                    </div>
                    <Link className="link-overlay" to="/portfolio-details"></Link>
                </div>
            </div> */}
            {/* <div className='col-lg-4' key={1}>
                <div className={`team ${props.teamStyle}`}>
                    <div className="thumbnail">
                        <img src={`/assets/images/building/multi-unit.jpg`} alt="Unit or Townhouse" />
                    </div>
                    <div className="content-wtb">
                        <h4 className="title">{data[0].title}</h4>
                         <p className="designation">{data[0].designation}</p> 
                    </div>
                     <ul className="social-icon" >
                        {data[0].socialNetwork.map((social, index) =>
                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                        )}
                    </ul> 
                </div>
            </div>

            <div className='col-lg-4' key={2}>
                <div className={`team ${props.teamStyle}`}>
                    <div className="thumbnail">
                        <img src={`/assets/images/team/team-${data[1].images}.jpg`} alt="Blog Images" />
                    </div>
                    <div className="content-wtb">
                        <h4 className="title">{data[1].title}</h4>
                        <p className="designation">{data[1].designation}</p>
                    </div>
                    <ul className="social-icon" >
                        {data[1].socialNetwork.map((social, index) =>
                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                        )}
                    </ul>
                </div>
            </div>
            <div className='col-lg-4' key={3}>
                <div className={`team ${props.teamStyle}`}>
                    <div className="thumbnail">
                        <img src={`/assets/images/team/team-${data[2].images}.jpg`} alt="Blog Images" />
                    </div>
                    <div className="content-wtb">
                        <h4 className="title">{data[2].title}</h4>
                        <p className="designation">{data[2].designation}</p>
                    </div>
                    <ul className="social-icon" >
                        {data[2].socialNetwork.map((social, index) =>
                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                        )}
                    </ul>
                </div>
            </div> */}
        </div>
    )
    // return (
    //     <div className="row">
    //         {itemSlice.map((value , i ) => (
    //             <div className='col-lg-4' key={i}>
    //                 <div className={`team ${props.teamStyle}`}>
    //                     <div className="thumbnail">
    //                         <img src={`/assets/images/team/team-${value.images}.jpg`} alt="Blog Images"/>
    //                     </div>
    //                     <div className="content">
    //                         <h4 className="title">{value.title}</h4>
    //                         <p className="designation">{value.designation}</p>
    //                     </div>
    //                     <ul className="social-icon" >
    //                         {value.socialNetwork.map((social, index) =>
    //                             <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
    //                         )}
    //                     </ul>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // )
}
export default WhereToBuild
