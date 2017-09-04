import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import './navTab.css';

class NavTab extends Component {
    
    handleClickChangeTab(item){
        this.props.handleChangeTab(item);
    }

    render() {
        const itemlist = this.props.item;
        return (
            <div className="my-tab">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            {
                                itemlist.map((item,index)=>{
                                    return(
                                        <Link to={item.href} className={ item.isActive ? "active" : " " } 
                                              key={item.id} 
                                              onClick={this.handleClickChangeTab.bind(this,item)}
                                              > {item.title} </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavTab;