import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} - Australia's Best Home Builder</title>
                    <meta name="description" content="Build your dream home with the trusted Australia's local home builder." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
