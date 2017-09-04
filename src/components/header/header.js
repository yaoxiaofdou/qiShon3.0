import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import './header.css';
import logo from '../../images/logo.png';

class Header extends Component {
    
    constructor(){
        super()
        this.state={
            headerIndex:0,
            headerLinkList:[
                {
                    id:'hd1024001',
                    title:'产品',
                    href:'/product',
                    headerIndex:0
                },{
                    id:'hd1024002',
                    title:'SaaS定制平台',
                    href:'/customization',
                    headerIndex:1
                },{
                    id:'hd1024003',
                    title:'SaaS面料平台',
                    href:'/saasFabric',
                    headerIndex:2
                },{
                    id:'hd1024004',
                    title:'客户案例',
                    href:'/case',
                    headerIndex:3
                },{
                    id:'hd1024005',
                    title:'活动资讯',
                    href:'/consulting',
                    headerIndex:4
                }
            ]
        }
    }

    handleClickNav(index){
        if(this.state.headerIndex !== index){
            this.setState({
                headerIndex:index
            })
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" onClick={this.handleClickNav.bind(this,5)}/>
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {
                                this.state.headerLinkList.map((hd,hindex)=>{
                                    return (
                                        <li key={hd.id}>
                                            <Link to={hd.href} onClick={this.handleClickNav.bind(this,hd.headerIndex)} className={this.state.headerIndex === hindex ? "nav--active":""}>
                                                {hd.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            
                            {/* <li><Link to="/customization" className={this.state.headerIndex === 1 ? "nav--active":""}>SaaS定制平台</Link></li>
                            <li><Link to="/saasFabric" className={this.state.headerIndex === 2 ? "nav--active":""}>SaaS面料平台</Link></li>
                            <li><Link to="/case" className={this.state.headerIndex === 3 ? "nav--active":""}>客户案例</Link></li>
                            <li><Link to="/consulting" className={this.state.headerIndex === 4 ? "nav--active":""}>活动资讯</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;