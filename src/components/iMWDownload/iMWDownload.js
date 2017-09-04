import React, { Component } from 'react';

import './iMWDownload.css';

import cus11 from '../../images/cus/cus11.png';
import cus12 from '../../images/cus/cus12.png';
import cus13 from '../../images/cus/cus13.png';

class IMWDownload extends Component {
    render() {
        return (
            <div className="row download">
                <div className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
                    <div className="">
                        <div className="col-xs-4 col-md-4">
                            <a href="" className="thumbnail">
                                <img src={cus11} alt="" />
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-4">
                            <a href="" className="thumbnail">
                                <img src={cus12} alt="" />
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-4">
                            <a href="" className="thumbnail">
                                <img src={cus13} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IMWDownload;