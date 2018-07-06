import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import StorePicker from './components/StorePicker';
import './styles/styles.css';
import notFound from './components/notFound';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={StorePicker}/>
                <Route path="/store/:storeId" component={App}/>
                <Switch component={notFound}/>
            </div>

        </BrowserRouter>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
