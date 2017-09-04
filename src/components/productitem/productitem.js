import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import "./productitem.css";

class Productitem extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="productitem">
                {
                    item.class ? (
                        <div className="tab1">
                            <div className="container">
                                <div className="row">
                                    <div className="tab1-img col-md-6 col-sm-6">
                                        <img src={item.img} className="auto img-responsive center-block" alt="" />
                                    </div>
                                    <QueueAnim type={['bottom']} className="tab1-text text col-md-6 col-sm-6">
                                        <h3 key="pitem001">{item.title}</h3>
                                        {
                                            item.text.map((txt,indx)=>{
                                                return (
                                                    <p key={"pit001"+indx}>{txt}</p>
                                                )
                                            })
                                        }
                                    </QueueAnim>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="tab2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <img src={item.img} className="auto img-responsive center-block" alt=""/>
                                    </div>
                                    <QueueAnim type={['bottom']} className="text col-md-6 col-sm-6">
                                        <h3 key="pitem011">{item.title}</h3>
                                        {
                                            item.text.map((txt,indx)=>{
                                                return (
                                                    <p key={"pit001"+indx}>{txt}</p>
                                                )
                                            })
                                        }
                                    </QueueAnim>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Productitem;