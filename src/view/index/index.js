import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';

import './index.css';

import Swiper from '../../components/swiper/swiper';
import Card from '../../components/card/card';

import projectImg01 from '../../images/index/iPad.png';
import projectImg02 from '../../images/index/ipad2.png';
import projectImg03 from '../../images/index/scanner.png';
import projectImg04 from '../../images/index/mac.png';

const indexCardListData = [
    {
        id:1020001001,
        company:"利郎（中国）有限公司",
        title:"中国男装领军品牌",
        src:"http://img3.imgtn.bdimg.com/it/u=3438398998,76872449&fm=27&gp=0.jpg",
        text:"利郎通过使用我们的面料扫描仪系统和面料展示系统方案解决了传统采集方式面料信息无法完整和真实的难题。",
        footer:"提升面料选样效率，面料管理"
    },{
        id:1020001002,
        company:"利郎（中国）有限公司",
        title:"中国男装领军品牌",
        src:"http://img3.imgtn.bdimg.com/it/u=3438398998,76872449&fm=27&gp=0.jpg",
        text:"利郎通过使用我们的面料扫描仪系统和面料展示系统方案解决了传统采集方式面料信息无法完整和真实的难题。",
        footer:"提升面料选样效率，面料管理"
    },{
        id:1020001003,
        company:"利郎（中国）有限公司",
        title:"中国男装领军品牌",
        src:"http://img3.imgtn.bdimg.com/it/u=3438398998,76872449&fm=27&gp=0.jpg",
        text:"利郎通过使用我们的面料扫描仪系统和面料展示系统方案解决了传统采集方式面料信息无法完整和真实的难题。",
        footer:"提升面料选样效率，面料管理"
    }
];

class Home extends Component {

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

    handleSwitchColor(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <QueueAnim className="qsIndex">
                {
                    this.state.swiper.map((swiperItem,swiperIndex)=>{
                        return(
                            <Swiper key="home01" swiper={swiperItem}/>
                        )
                    })
                }
                <div className="container" key="home02">
                    {/* <p style={{ color:this.props.themeColor }}>
                        我的头疼头疼头疼
                    </p>
                
                    <button 
                        style={{ color:this.props.themeColor }} 
                        onClick={this.handleSwitchColor.bind(this,'blue')}>
                        blue
                    </button> */}

                    <div className="project">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-xs-6 system">
                                    <p className="projectName">时尚定制系统</p>
                                    <p className="projectDesc">360°实展示3D服装定制效果</p>
                                    <img src={projectImg01} alt="001" />
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-6 system">
                                    <p className="projectName">时尚定制系统</p>
                                    <p className="projectDesc">360°实展示3D服装定制效果</p>
                                    <img src={projectImg02} alt="002" />
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-6 system">
                                    <p className="projectName">时尚定制系统</p>
                                    <p className="projectDesc">360°实展示3D服装定制效果</p>
                                    <img src={projectImg03} alt="003" />
                                </div>
                                <div className="col-lg-3 col-sm-6 col-xs-6 system">
                                    <p className="projectName">时尚定制系统</p>
                                    <p className="projectDesc">360°实展示3D服装定制效果</p>
                                    <img src={projectImg04} alt="004" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            indexCardListData.map((item,index)=>{
                                return(
                                    <div key={item.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                        <Card item={item} borderTop={false}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </QueueAnim> 
        );
    }
}

// 获取 redux 全局的 指定 state 
const mapStateToProps = (state) => {
    return {
        themeColor: state.colorReducer.themeColor
    }
}

// 设置 redux 全局的 指定 state 
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);