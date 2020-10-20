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

const cat = [
    {
        id: 1,
        name: 'Tech',
        slug:'tech'
    },
    {
        id: 2,
        name: 'Socail',
        slug:'socail'
    }
]

function App() {
    return (
        <Router>
            <Switch>
                <Header category={cat} />
                <Route exact path="/" component={Home} />
                <Route path="/article/:id" component={Article} />
                <Route path="/category/:id" component={Category} />
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
