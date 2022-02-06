import React from 'react'
import data from "./data";
const WhereToBuild = (props) => {
    const itemSlice = data.slice(0, 3)
    return (
        <div className="row no-gutters">
            <div className='col-lg-4' key={1}>
                <div className={`team ${props.teamStyle}`}>
                    <div className="thumbnail">
                        <img src={`/assets/images/building/multi-unit.jpg`} alt="Unit or Townhouse" />
                    </div>
                    <div className="content-wtb">
                        <h4 className="title">{data[0].title}</h4>
                        {/* <p className="designation">{data[0].designation}</p> */}
                    </div>
                    {/* <ul className="social-icon" >
                        {data[0].socialNetwork.map((social, index) =>
                            <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                        )}
                    </ul> */}
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
            </div>
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
