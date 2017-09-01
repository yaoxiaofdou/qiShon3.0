import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() {
        return (
            <div>
                header
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/demo">demo</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;