import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.scss';

import HomePage from './Pages/Home/Home';

class App extends Component {

    constructor ( props ) {
       super(props);

       this.state = { isLoading : true };
    }

    componentDidMount() {
        this.setState({ isLoading: false });

        HTMLElement.prototype.hasClass = function(className) {
            var classes = this.className;
            var regEx = new RegExp("\\b"+className+"\\b");
            return regEx.test(classes);
        };

    }

    render(props) {
        let app =
            <Route render={ ({location}) => (
                <>
                    <TransitionGroup className="page-container">
                        <CSSTransition
                            key={location.pathname}
                            timeout={1000}
                            classNames="page"
                            appear
                        >

                          <Switch location={location}>
                            <Route
                                path="/"
                                component={HomePage} />
                          </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </>
        )} />

        return (
            <BrowserRouter>
                <div className="App">
                    { this.state.isLoading ? <span>Loading</span>: app }
                </div>
            </BrowserRouter>
        );

    }

}

export default App;

