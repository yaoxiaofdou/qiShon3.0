import React, { Component } from 'react';

import './securityList.css';

import cus10 from '../../images/cus/cus10.png';
import cus9 from '../../images/cus/cus9.png';

class SecurityList extends Component {
    render() {
        return (
            <div className="row data">
                <p className="data-title t-c">启尚正在为企业信息数据安全保驾护航</p>
                <p className="data-title-s t-c">ISO 27001:2013信息安全管理体系标准认证：公安部信息系统三级等级保护认证</p>
                <div className="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2">
                    <div className="row data-row">
                        <div className="col-lg-6 col-md-6">
                            <div className="thumbnail">
                                <div className="caption">
                                    <p className="caption-title t-c">数据独立</p>
                                    <p className="caption-detail">企业数据使用加解密技术方案，对敏感数据的保护贯穿整个数据安全生命周期，达到银行级数据加密存储级别;
                                        基于SSL/TLS协议以加密形式传输数据，以确保端到端的网络传输安全。</p>
                                </div>
                                <img src={cus10} alt="cus10" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="thumbnail">
                                <div className="caption">
                                    <p className="caption-title t-c">数据安全</p>
                                    <p className="caption-detail">第三方加密算法不仅支持行业标准的加密算法，还支持国密算法加密。和第三方双重加密，让企业在公有云上享受私有网络的安全。
                                        密聊，不留痕迹的私密聊天，头像和人名打码，消息已读后，物理销毁该消息。</p>
                                </div>
                                <img src={cus9} alt="cus9" />
                            </div>
                        </div>
                    </div>

                    <div className="detail t-c"><span>查看安全详情 ></span></div>
                </div>
            </div>
        );
    }
}

export default SecurityList;