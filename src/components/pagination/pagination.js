import React, { Component } from 'react';

import './pagination.css';

class Pagination extends Component {
    render() {
        return (
            <div className="page-custom">
                <ul>
                    <li><span className="none-border">上一页</span></li>
                    <li><span className="active">1</span></li>
                    <li><span>2</span></li>
                    <li><span>3</span></li>
                    <li><span>4</span></li>
                    <li><span>5</span></li>
                    <li><span className="none-border">下一页</span></li>
                </ul>
            </div>
        );
    }
}

export default Pagination;