import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/Header';
import Article from './pages/Article';
import Category from './pages/Category';
import Home from './pages/Home';

import API from './config'
import moment from 'moment'
moment.locale('km');

function App() {
    const [menu, setMenu] = React.useState([]);

    React.useEffect(() => {
        API
            .get(`categories`)
            .then(response => {
                console.log(response)
                setMenu(response.data)
            })
    },[])
    return (
        <React.Fragment>
            <Router>
                <Header category={menu} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/article/:id" component={Article} />
                    <Route path="/category/:id" component={Category} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
