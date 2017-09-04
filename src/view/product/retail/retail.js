import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import Productitem from '../../../components/productitem/productitem';

import tab12 from '../../../images/product/tab12.png';
import tab13 from '../../../images/product/tab13.png';
import tab14 from '../../../images/product/tab14.png';
import tab15 from '../../../images/product/tab15.png';

class Retail extends Component {
    constructor(){
        super()
        this.state = {
            Retaillist:[
                {
                    id:'re1024001',
                    title:'搭配工具',
                    text:[
                        '根据商品库存调整搭配，设定多种固定搭配建议',
                        '搭配建议同步到终端',
                        '提升商品连带率，提升滞销产品的销售量'
                    ],
                    img:tab12,
                    class:true
                },{
                    id:'re1024002',
                    title:'智能购物系统',
                    text:[
                        '3D效果实时渲染展示',
                        '多品类服装搭配选择',
                        '丰富服装应用场景切换'
                    ],
                    img:tab13,
                    class:false
                },{
                    id:'re1024003',
                    title:'大货定制系统',
                    text:[
                        '印花机操作简单，效率高，能够提升企业对订单的响应速度',
                        '绣花机支持连续24小时无间隙工作，为门店提供快 速定制解决方案',
                        '牛仔激光雕花，快速支持门店个性化需求的定制化 生产方案'
                    ],
                    img:tab14,
                    class:true
                },{
                    id:'re1024004',
                    title:'脚型扫描系统',
                    text:[
                        '针对不同的脚型或足弓，系统推荐相应的鞋型',
                        '针对消费者的足弓缺陷，系统自动推送复检通知',
                        '特别针对儿童足部健康的追踪，这项健康关爱功 能，将大幅度提升消费者粘度'
                    ],
                    img:tab15,
                    class:false
                }
            ]
        }
    }

    render() {
        return (
            <QueueAnim className="productRetail">
                {
                    this.state.Retaillist.map((fabricItem,fabricIndex)=>{
                        return(
                            <Productitem item={fabricItem} key={fabricItem.id}/>
                        )
                    })
                }
            </QueueAnim>
        );
    }
}

export default Retail;