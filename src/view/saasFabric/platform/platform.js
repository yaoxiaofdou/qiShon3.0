import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
    Link
} from 'react-router-dom';

import Swiper from '../../../components/swiper/swiper';
import Cus from '../../../components/cus/cus';
import SecurityList from '../../../components/securityList/securityList';
import IMWDownload from '../../../components/iMWDownload/iMWDownload';
import PlatformPublicTab from '../../../components/platformPublicTab/platformPublicTab';


import './platform.css';

import Cus01 from '../../../images/cus/cus1.png';
import Cus02 from '../../../images/cus/cus2.png';
import Cus03 from '../../../images/cus/cus3.png';
import Cus04 from '../../../images/cus/cus4.png';
import Cus05 from '../../../images/cus/cus5.png';
import Cus06 from '../../../images/cus/cus6.png';
import Cus07 from '../../../images/cus/cus7.png';
import Cus08 from '../../../images/cus/cus8.png';

import Cus14 from '../../../images/cus/cus14.png';
import Cus15 from '../../../images/cus/cus15.png';

class Platform extends Component {
    constructor(){
        super()
        this.state = {
            swiper:[
                {
                    id:'P102401001',
                    name:'swiper1',
                    src:'',
                    title:'面料扫描系统的应用',
                    text:'利郎通过使用我们的面料扫描仪系统和面料展示系统方案解决了传统采集方式面料信息无法完整和真实的难题',
                    btnPanel:[
                        {
                            id:'I102401001B01',
                            name:'swiper1-btn1',
                            href:'/',
                            btnName:'立即注册',
                            isActive:false
                        },{
                            id:'I102401001B02',
                            name:'swiper1-btn2',
                            href:'/',
                            btnName:'查看详情',
                            isActive:false
                        }
                    ]
                }
            ],
            CusTabIndex:0,
            CusTab:[
                {
                    id:'sat1024001',
                    title:'我是服务商',
                    img:Cus14,
                    CusTabIndex:0,
                    isActive:false
                },{
                    id:'sat1024002',
                    title:'我是品牌方',
                    img:Cus15,
                    CusTabIndex:1,
                    isActive:true
                }
            ],
            CusArr:[
                {
                    id:'sa1024001',
                    img:Cus01,
                    title:'减少企业成本',
                    text:'3D订制效果展示，打通企业与消费者中间的信息渠道。'
                },{
                    id:'sa1024002',
                    img:Cus02,
                    title:'缩短产品研制周期',
                    text:'3D虚拟试衣，减少反复试衣与改版的次数。'
                },{
                    id:'sa1024003',
                    img:Cus03,
                    title:'降低企业产品不良率',
                    text:'平台对接生产，订单信息及量体数据准确传输到生产部门。'
                },{
                    id:'sa1024004',
                    img:Cus04,
                    title:'三维仿真定制效果展现',
                    text:'3D互动视效，打造极致逼真的产品互动体验。'
                },{
                    id:'sa1024005',
                    img:Cus05,
                    title:'覆盖全平台多终端',
                    text:'适用于大屏、IPAD、PC、手机等所有设备终端。'
                },{
                    id:'sa1024006',
                    img:Cus06,
                    title:'独立安全的数据管理',
                    text:'根据客户分组授权查看面料，有效确保面料数据独立。'
                },{
                    id:'sa1024007',
                    img:Cus07,
                    title:'支持深度项目化定制',
                    text:'持私有化项目部署，为您的应用需求进行高级适配开发。'
                },{
                    id:'sa1024008',
                    img:Cus08,
                    title:'低价入驻引爆新商业模式',
                    text:'3650元年费快速入驻。'
                }
            ],
        }
    }

    handleSaasFabricTabClick(tab,ttt){
        if(tab[ttt] !== this.state[ttt]){
            this.setState({
                [ttt]:tab[ttt]
            })
        }
    }

    render() {
        return (
            <QueueAnim className="qsPlatform">
                {
                    this.state.swiper.map((swiperItem,swiperIndex)=>{
                        return(
                            <Swiper key="platform01" swiper={swiperItem} />
                        )
                    })
                }
                <div className="row none-px">

                    <h3 className="cus-h3 t-c">欢迎进入定制平台</h3>

                    <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 border">
                        <Tabs className="qsPlatform__content">
                            <div className="my-tab2">
                                <TabList className="row">
                                    {
                                        this.state.CusTab.map((tab,index)=>{
                                            return(
                                                <Tab key={tab.id} className="my-tab2__item">
                                                    <div onClick={this.handleSaasFabricTabClick.bind(this,tab,'CusTabIndex')} className={ tab.CusTabIndex === this.state.CusTabIndex ? "col-lg-6 col-md-6 col-sm-6 col-xs-6 nav-tab-child my-tab2__item--active" :"col-lg-6 col-md-6 col-sm-6 col-xs-6 nav-tab-child" }>
                                                        <img src={tab.img} alt="" className="img-display" />
                                                        <span>{tab.title}</span>
                                                    </div>
                                                </Tab>
                                            )
                                        })
                                    }
                                </TabList>
                            </div>
                            
                            <div className="row qsPlatform__content__item" style={{padding:'3% 0'}}>
                                {/* 我是服务商 */}
                                <TabPanel>
                                    <PlatformPublicTab />
                                </TabPanel>
                                {/* 我是品牌方 */}
                                <TabPanel>
                                    <QueueAnim>
                                        {
                                            this.state.CusArr.map((item,index)=>{
                                                return(
                                                    <div key={item.id} className="col-sm-6 col-md-4">
                                                        <Cus item={item} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </QueueAnim>
                                </TabPanel>
                            </div>
                            <p className="cus-enter t-c">
                                <Link to="/saasFabric/doc">进入文档中心<span></span></Link>
                            </p>
                        </Tabs>
                    </div>
                </div>

                <SecurityList />

                <IMWDownload />

            </QueueAnim>
        );
    }
}

export default Platform;