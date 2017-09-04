import React, { Component } from 'react';

import './footer.css';

class Footer extends Component {
    state = {  }
    render() {
        return (
            <div className="qs-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-8 qs-footer__litxt">
                            <ul className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                <li className="qs-footer__litxt__title">了解我们</li>
                                <li><a>关于我们</a></li>
                                <li><a>面料平台</a></li>
                                <li><a>定制平台</a></li>
                                <li><a>服装智能零售</a></li>
                            </ul>
                            <ul className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                <li className="qs-footer__litxt__title">联系我们</li>
                                <li><a>联系方式</a></li>
                                <li><a>QQ客服</a></li>
                            </ul>
                            <ul className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                <li className="qs-footer__litxt__title">加入我们</li>
                                <li><a>人才计划</a></li>
                            </ul>
                            <ul className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
                                <li className="qs-footer__litxt__title">规则条款</li>
                                <li><a>服务条款</a></li>
                                <li><a>隐私条款</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-4 qs-footer__phone">
                            <h3>0591-88157808</h3>
                            <h5>周一至周五 08:00 - 20:00</h5>
                            <div className="qs-footer__phone__btn">
                                <button className="btn">免费上门服务</button>
                            </div>
                            <div className="qs-footer__phone__icon">
                                <i className="iconfont icon-guanwang-tubiao-14"></i>
                                <i className="iconfont icon-guanwang-tubiao-11"></i>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 qs-footer__company">
                            <p> Copyright © 2012-2017 Qishon Technology International Company Ltd. </p>
                            <h4>厦门启尚科技有限公司</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;