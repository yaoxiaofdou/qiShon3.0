import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import $ from 'jquery';

import Swiper from '../../components/swiper/swiper';
import Card from '../../components/card/card';

import './case.css';

class Case extends Component {
    
    constructor(){
        super()
        this.state = {
            listData : [],
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

    componentWillMount(){
        // 加载外部json数据
        this.getCaseData();
    }

    getCaseData(){
        let that = this;
        $.get(process.env.PUBLIC_URL+"/data/case.json",function(data,status){
            console.log(data)
            that.setState({
                listData:data
            })
        });
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
                
                <div className="container case__content">
                    <QueueAnim className="row">
                        {
                            this.state.listData.map((caseItem,caseIndex)=>{
                                return(
                                    <div key={ caseItem.id } className="col-xs-12 col-sm-6 col-md-6 col-lg-4 case__content__li">
                                        <Card item = { caseItem } broderTop={true} />
                                    </div>
                                )
                            })
                        }
                    </QueueAnim>
                </div>

            </QueueAnim>
        );
    }
}

export default Case;