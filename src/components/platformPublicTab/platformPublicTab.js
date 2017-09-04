import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import QueueAnim from 'rc-queue-anim';

import Cus from '../cus/cus';

import './platformPublicTab.css';

import Cus01 from '../../images/cus/cus1.png';
import Cus02 from '../../images/cus/cus2.png';
import Cus03 from '../../images/cus/cus3.png';
import Cus04 from '../../images/cus/cus4.png';
import Cus05 from '../../images/cus/cus5.png';
import Cus06 from '../../images/cus/cus6.png';
import Cus07 from '../../images/cus/cus7.png';
import Cus08 from '../../images/cus/cus8.png';

class PlatformPublicTab extends Component {
    constructor(){
        super()
        this.state = {
            CusTabIndexTabIndex:0,
            CusTabIndexTab:[
                {
                    id:'satT1024001',
                    title:'我能得到什么',
                    CusTabIndexTabIndex:0,
                    isActive:true
                },{
                    id:'satT1024002',
                    title:'入驻流程',
                    CusTabIndexTabIndex:1,
                    isActive:false
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
            flowArr:[
                {
                    id:'flow1024001',
                    title:'会员注册'
                },{
                    id:'flow1024002',
                    title:'完善企业资料'
                },{
                    id:'flow1024003',
                    title:'审核企业资质'
                },{
                    id:'flow1024004',
                    title:'面料上传流程'
                },{
                    id:'flow1024005',
                    title:'设置面料呈现效果'
                }
            ]
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
            <Tabs className="cus-p t-c">
                <TabList className="my-tab">
                    {
                        this.state.CusTabIndexTab.map((tabt,index)=>{
                            return(
                                <Tab key={tabt.id} onClick={this.handleSaasFabricTabClick.bind(this,tabt,'CusTabIndexTabIndex')} className={tabt.CusTabIndexTabIndex === this.state.CusTabIndexTabIndex ? "nav-tab nav-tab--active":"nav-tab" }>
                                    {tabt.title}
                                </Tab>
                            )
                        })
                    }
                </TabList>
                {/* 我能得到什么 */}
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
                {/* 入住流程 */}
                <TabPanel>
                    <QueueAnim>
                        {
                            this.state.flowArr.map((flowitem,flowindex)=>{
                                return(
                                    <div key={flowitem.id} className={ flowindex === 3 ? "col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-offset-2":"col-xs-12 col-sm-6 col-md-6 col-lg-4" }>
                                        <div className="qsPlatform__flowPanel">
                                            <span>{flowindex+1}</span>
                                            {flowitem.title}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </QueueAnim>
                </TabPanel>
            </Tabs>
        );
    }
}

export default PlatformPublicTab;