import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import Swiper from '../../components/swiper/swiper';
import PlatformPublicTab from '../../components/platformPublicTab/platformPublicTab';
import SecurityList from '../../components/securityList/securityList';
import IMWDownload from '../../components/iMWDownload/iMWDownload';


class Customization extends Component {
    
    constructor(){
        super()
        this.state = {
            swiper:[
                {
                    id:'I102401001',
                    name:'swiper1',
                    src:'',
                    title:'面料扫描系统的应用',
                    text:'利郎通过使用我们的面料扫描仪系统和面料展示系统方案解决了传统采集方式面料信息无法完整和真实的难题',
                    btnPanel:[
                        {
                            id:'I102401001B01',
                            name:'swiper1-btn1',
                            href:'/',
                            btnName:'查看详情',
                            isActive:false
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <QueueAnim>
                {
                    this.state.swiper.map((swiperItem,swiperIndex)=>{
                        return(
                            <Swiper key="home01" swiper={swiperItem}/>
                        )
                    })
                }
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 border">
                            <PlatformPublicTab />
                        </div>
                    </div>
                </div>

                <SecurityList />

                <IMWDownload />

            </QueueAnim>
        );
    }
}

export default Customization;