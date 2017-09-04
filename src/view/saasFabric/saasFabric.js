import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import NavTab from '../../components/navTab/navTab';

import './saasFabric.css';

import Doc from './doc/doc';
import Platform from './platform/platform';

class SaasFabric extends Component {
    
    constructor(){
        super()
        this.state = {
            navtabList:[
                {
                    id:102402001,
                    href:'/saasFabric',
                    title:'平台价值',
                    isActive:true
                },{
                    id:102402002,
                    href:'/saasFabric/doc',
                    title:'文档中心',
                    isActive:false
                }
            ],
        }
    }

    // 点击改变tab事件
    handleChangeTab(tab){
        this.state.navtabList.forEach((item,index)=>{
            item.isActive = false;
        })
        tab.isActive = true;
    }

    render() {
        return (
            <div>
                <div className="qsDoc__tabH">
                    <div className="container">
                        <NavTab item={this.state.navtabList} handleChangeTab={this.handleChangeTab.bind(this)} />
                        <div className="qsDoc__tabH__FormBtn">
                            <a href="##" className="qsDoc__tabH__FormBtn__submit">注册</a>
                            <a href="##">登陆</a>
                        </div>
                    </div>
                </div>
                <div className="qsSaasFabric__tabPanel">
                    
                    <Route path="/saasFabric/doc" component={Doc}/>
                    <Route exact path="/saasFabric" component={Platform}/>

                </div>
            </div>
        );
    }
}

export default SaasFabric;