import React, { Component } from 'react';

import './cus.css';

class Cus extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="thumbnail cus">
                <img src={item.img} alt={item.title} />
                <div className="caption">
                    <p className="cus-title t-c">{item.title}</p>
                    <p className="cus-detail">{item.text}</p>
                </div>
            </div>
        );
    }
}

export default Cus;