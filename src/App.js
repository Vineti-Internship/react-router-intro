import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import A from './components/a';
import B from './components/b';
import C from './components/c';
import AB from './components/ab';
import Root from './components/root';
import NotFound from './components/not_found';
import Button from '@material-ui/core/Button';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="header-text">Header</h1>
        <Button variant="contained">Text</Button>
        <Router>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
            <Route path="/a/b" component={AB} />
            <Route path="/c/:id" component={C} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default App;
