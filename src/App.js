import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Characters from './components/pages/Characters';
import Comics from './components/pages/Comics';
import Creators from './components/pages/Creators';
import Events from './components/pages/Events';
import Series from './components/pages/Series';
import Stories from './components/pages/Stories';

import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className='App'>
                    <Navbar />

                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route
                                exact
                                path='/characters'
                                component={Characters}
                            />
                            <Route exact path='/comics' component={Comics} />
                            <Route
                                exact
                                path='/creators'
                                component={Creators}
                            />
                            <Route exact path='/events' component={Events} />
                            <Route exact path='/series' component={Series} />
                            <Route exact path='/stories' component={Stories} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
