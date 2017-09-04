import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import {
    Link
} from 'react-router-dom';

import './swiper.css';

class Swiper extends Component {
    render() {
        let item = this.props.swiper;
        return (
            <div className="qs-swiper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide-one">
                            <div className="container">
                                <div className="row">
                                    <QueueAnim type={['right']} className="qs-swiper__title col-xs-7 col-sm-7 col-md-8 col-lg-5">
                                        <h2 key="swiper01" className="qs-swiper__title__h">{ item.title }</h2>
                                        <p key="swiper02" className="qs-swiper__title__p">{ item.text }</p>
                                        <QueueAnim type={['bottom']} className="qs-swiper__title__btnpanel">
                                            {
                                                item.btnPanel.map((btn,index)=>{
                                                    return(
                                                        <Link key={btn.id} to={btn.href} className={ btn.isActive ? "qs-swiper__title__btnpanel__btndetail":" " }>
                                                            { btn.btnName }
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </QueueAnim>
                                    </QueueAnim>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default Swiper;