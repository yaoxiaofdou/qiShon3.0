import React, { Component } from 'react';

import './docCard.css';

class DocCard extends Component {
    render() {
        let item = this.props.item;

        let txtcenter = item.textCtr ? 'qs-docCard--center' : '';

        return (
            <div className="qs-docCard">
                <div className="qs-docCard__icon">
                    <img src={ item.img } alt="docimg" />
                </div>
                <h3 className="qs-docCard__h"> { item.title } </h3>
                <p className={ "qs-docCard__p " + txtcenter}>{ item.text }</p>
                {
                    item.btnshow ? (
                        <div className="qs-docCard__a">
                            <a href="###">快速接入</a>
                        </div>
                    ) : ( null )
                }
            </div>
        );
    }
}

export default DocCard;