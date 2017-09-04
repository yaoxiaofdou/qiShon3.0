import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './view/index/index';
import SaasFabric from './view/saasFabric/saasFabric';
import Case from './view/case/case';
import Consulting from'./view/consulting/consulting';
import Customization from './view/saasCustomization/customization';
import Product from './view/product/product';

import store from './redux/store/index';

class App extends Component {
    render() {
        return (
            <Router>
                {/** 主路由配置 **/}
                <div className="App">
  
                    <Header />
  
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/customization" component={Customization} />
                    <Route path="/saasFabric" component={SaasFabric}/>
                    <Route path="/case" component={Case}/>
                    <Route path="/consulting" component={Consulting}/>

                    <Footer />
  
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
