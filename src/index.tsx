import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store/index'
import App from './components/App/App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
)
;
