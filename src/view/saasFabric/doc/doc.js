import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import DocCard from '../../../components/docCard/docCard';

import './doc.css';

import doc01 from '../../../images/doc01.png';
import doc02 from '../../../images/doc02.png';
import doc03 from '../../../images/doc03.png';
import videoimg01 from '../../../images/docVideo01.png';
import videoimg02 from '../../../images/docVideo02.png';
import videoimg03 from '../../../images/docVideo03.png';
import videoimg04 from '../../../images/docVideo04.png';
import videoimg05 from '../../../images/docVideo05.png';
import videoimg06 from '../../../images/docVideo06.png';
import videoimg07 from '../../../images/docVideo07.png';
import videoimg08 from '../../../images/docVideo08.png';

class Doc extends Component {
    constructor(){
        super()
        this.state = {
            docList:[
                {
                    id:102403001,
                    img:doc01,
                    href:'',
                    title:'企业内部开发',
                    text:'企业IT人员，依托定制平台的开放能力，将公司的HR、OA、客户管理等系统接入',
                    btnshow:true,
                },{
                    id:102403002,
                    img:doc02,
                    href:'',
                    title:'应用服务商',
                    text:'适用于应用服务商，将自己开发的应用商家到应用市场，提供给其他用户使用',
                    btnshow:true,
                },{
                    id:102403003,
                    img:doc03,
                    href:'',
                    title:'集成服务商',
                    text:'为服务商提供定制开发和系统集成服务，或为特定行业提供微应用',
                    btnshow:true,
                }
            ],
            videoList:[
                {
                    id:102403004,
                    img:videoimg01,
                    href:'',
                    title:'移动端API',
                    text:'用于移动端开发所需的相关API接口',
                    textCtr:true,
                    btnshow:false,
                },{
                    id:102403005,
                    img:videoimg02,
                    href:'',
                    title:'PC端API',
                    text:'用于PC开发所需的相关API接口',
                    textCtr:true,
                    btnshow:false,
                },{
                    id:102403006,
                    img:videoimg03,
                    href:'',
                    title:'服务端开发文档',
                    text:'用于服务端开发业务逻辑以及开发所需的相关API接口',
                    textCtr:true,
                    btnshow:false,
                },{
                    id:102403007,
                    img:videoimg04,
                    href:'',
                    title:'通讯录管理',
                    text:'通讯录相关API接口',
                    textCtr:true,
                    btnshow:false,
                },{
                    id:102403008,
                    img:videoimg05,
                    href:'',
                    title:'智能办公文档',
                    text:'考勤签到相关API接口',
                    textCtr:true,
                    btnshow:false,
                },{
                    id:102403009,
                    img:videoimg06,
                    href:'',
                    title:'免登服务',
                    text:'免登相关服务及接口',
                    textCtr:true,
                    btnshow:false,
                },{
                    id:102403010,
                    img:videoimg07,
                    href:'',
                    title:'多媒体',
                    text:'文件上传下载管理相关API接口',
                    textCtr:true,
                    btnshow:false,
                },{
                    id:102403011,
                    img:videoimg08,
                    href:'',
                    title:'会话消息',
                    text:'企业会话相关API接口',
                    textCtr:true,
                    btnshow:false,
                }
            ]
        }
    }
    render() {
        return (
            <div className="container qsDocPanel">
                <div className="qsDoc__h">
                    <h4>文档</h4>
                </div>
                <QueueAnim delay={100} className="row">
                    {
                        this.state.docList.map((docItem,docIndex)=>{
                            return (
                                <div key={docItem.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-3 qsDoc__li">
                                    <DocCard item={ docItem }/>
                                </div>
                            )
                        })
                    }
                </QueueAnim>
                <div className="qsDoc__h">
                    <h4>视频</h4>
                </div>
                <QueueAnim delay={100} className="row">
                    {
                        this.state.videoList.map((docItem,docIndex)=>{
                            return (
                                <div key={docItem.id} className="col-xs-12 col-sm-6 col-md-6 col-lg-3 qsDoc__li">
                                    <DocCard item={ docItem }/>
                                </div>
                            )
                        })
                    }
                </QueueAnim>
            </div>
        );
    }
}

export default Doc;