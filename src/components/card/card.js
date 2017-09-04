import React, { Component } from 'react';

import './card.css';

class Card extends Component {
    render() {

        let broderTop = this.props.broderTop;
        let item = this.props.item;

        return (
            <div className="qs-card">
                <a href="###">
                    <div className="qs-card__headerImg">
                        <img src={ item.src } alt="qsCard" />
                    </div>
                    <div className="qs-card__contentTxt">
                        <div className="qs-card__contentTxt__panel">
                            <h3>{ item.company }</h3>
                            <h2>{ item.title }</h2>
                            <p className="qs-card__contentTxt__panel__txt">{ item.text }</p>
                            <p className={ broderTop ? "qs-card__contentTxt__panel__a qs-card__contentTxt__panel__a--border" : "qs-card__contentTxt__panel__a" }>提升面料选择效率，面料管理</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Card;