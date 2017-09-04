import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import NavTab from '../../components/navTab/navTab';

import ProductFabric from './productFabric/productFabric';
import Customization from './customization/customization';
import Retail from './retail/retail';

class Product extends Component {
    constructor(){
        super()
        this.state = {
            navtabList:[
                {
                    id:10102402001,
                    href:'/product',
                    title:'面料平台',
                    isActive:true
                },{
                    id:10102402002,
                    href:'/product/Customization',
                    title:'定制平台',
                    isActive:false
                },{
                    id:10102402003,
                    href:'/product/Retail',
                    title:'零售平台',
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
                <NavTab item={this.state.navtabList} handleChangeTab={this.handleChangeTab.bind(this)} />

                <Route exact path="/product" component={ProductFabric}/>
                <Route path="/product/Customization" component={Customization}/>
                <Route path="/product/Retail" component={Retail}/>
                
            </div>
        );
    }
}

export default Product;