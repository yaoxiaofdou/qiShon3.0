import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import $ from 'jquery';

import Swiper from '../../components/swiper/swiper';
import Card from '../../components/card/card';
import Pagination from '../../components/pagination/pagination';

import './consulting.css';

class Consulting extends Component {
    
    constructor(){
        super()
        this.state = {
            listData:[],
            swiper:[
                {
                    id:'I102401001',
                    name:'swiper1',
                    src:'',
                    title:'助力西樵高峰论坛',
                    text:'技术与模式创新将改变纺织工业现状',
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
                <div className="container mt-5 mb-5">
                    <QueueAnim className="row">
                        {
                            this.state.listData.map((caseItem,caseIndex)=>{
                                return(
                                    <div key={ caseItem.id } className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-2">
                                        <Card item = { caseItem } broderTop={true} />
                                    </div>
                                )
                            })
                        }
                    </QueueAnim>
                </div>
                
                <Pagination />
                
            </QueueAnim>
        );
    }
}

export default Consulting;