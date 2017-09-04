import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import Productitem from '../../../components/productitem/productitem';

import tab1 from '../../../images/product/tab1.png';
import tab2 from '../../../images/product/tab2.png';
import tab3 from '../../../images/product/tab3.png';
import tab4 from '../../../images/product/tab4.png';
import tab5 from '../../../images/product/tab5.png';
import tab6 from '../../../images/product/tab6.png';

import './productFabric.css';

class ProductFabric extends Component {
    constructor(){
        super()
        this.state = {
            fabriclist:[
                {
                    id:'fa1024001',
                    title:'高清面料扫描仪',
                    text:[
                        '2-3分钟即可完成3D高清面料扫描',
                        '高效解决传统四方循环处理的痛点',
                        '解决面料在线上无法逼真展示的痛点'
                    ],
                    img:tab1,
                    class:true
                },{
                    id:'fa1024002',
                    title:'面料3D成衣可视化',
                    text:[
                        '收录的面料种类齐全，数量繁多，归类整理， 便于选择',
                        '使用3D技术虚拟出面料成衣效果'
                    ],
                    img:tab2,
                    class:false
                },{
                    id:'fa1024003',
                    title:'面料相似度检索',
                    text:[
                        '神经网络图像识别技术（人工智能）',
                        '提升面料检索效率、精准率',
                        '降低面料寻源的人力、物力、财力'
                    ],
                    img:tab3,
                    class:true
                },{
                    id:'fa1024004',
                    title:'面料3D成衣评审',
                    text:[
                        '虚拟样衣有助于对面料的评价分析',
                        '面料合理归类，虚拟样衣效果有助于面料挑选'
                    ],
                    img:tab4,
                    class:false
                },{
                    id:'fa1024005',
                    title:'面料图形设计',
                    text:[
                        '更换color贴图',
                        '查看面料设计的效果'
                    ],
                    img:tab5,
                    class:true
                }
            ]
        }
    }

    render() {
        return (
            <QueueAnim className="productFabric">
                {
                    this.state.fabriclist.map((fabricItem,fabricIndex)=>{
                        return(
                            <Productitem item={fabricItem} key={fabricItem.id}/>
                        )
                    })
                }
                <div key="pf03" className="productFabric__footerimg">
                    <h3>整体解决方案</h3>
                    <img src={tab6} className="auto img-responsive center-block" alt="" />
                </div>
            </QueueAnim>
        );
    }
}

export default ProductFabric;