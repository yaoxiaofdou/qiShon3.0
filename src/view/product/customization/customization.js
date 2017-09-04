import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import Productitem from '../../../components/productitem/productitem';

import './customization.css';

import tab7 from '../../../images/product/tab7.png';
import tab8 from '../../../images/product/tab8.png';
import tab9 from '../../../images/product/tab9.png';
import tab10 from '../../../images/product/tab10.png';
import tab11 from '../../../images/product/tab11.png';

class Customization extends Component {
    constructor(){
        super()
        this.state = {
            fabriclist:[
                {
                    id:'cus1024001',
                    title:'360度3D展示',
                    text:[
                        '3D实时渲染，效果清晰逼真',
                        '360°全方位展示',
                        '放大、缩小查看纹理、细节效果'
                    ],
                    img:tab7,
                    class:true
                },{
                    id:'cus1024002',
                    title:'双屏联动',
                    text:[
                        '双屏联动，便捷展示',
                        '在 IPAD上操作，可以直接在导购大屏上查看3D效果'
                    ],
                    img:tab8,
                    class:false
                },{
                    id:'cus1024003',
                    title:'部件定制',
                    text:[
                        '3D实时渲染，360°全方位展示清晰逼真的效果',
                        '顾客可以根据喜好，更换服装 的各大部件，并查 看和确认订制的服装款式效果',
                        '彰显个性，提升顾客订制消费体验'
                    ],
                    img:tab9,
                    class:true
                },{
                    id:'cus1024004',
                    title:'推荐搭配',
                    text:[
                        '根据新款搭配和设计师推荐搭配，可以自由选择 和自我搭配',
                        '彰显个性，提升顾客订制消费体验'
                    ],
                    img:tab10,
                    class:false
                },{
                    id:'cus1024005',
                    title:'多平台打通',
                    text:[
                        '整合移动终端、PC端、WEB端、微信端、智 能屏等多平台应用数据打通，并打通对接企业 生产系统',
                    ],
                    img:tab11,
                    class:true
                }
            ]
        }
    }
    render() {
        return (
            <QueueAnim className="productCustomization">
                {
                    this.state.fabriclist.map((fabricItem,fabricIndex)=>{
                        return(
                            <Productitem item={fabricItem} key={fabricItem.id}/>
                        )
                    })
                }
            </QueueAnim>
        );
    }
}

export default Customization;