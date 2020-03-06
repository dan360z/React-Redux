import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import Header from './Common/Header';
import pageNotFound from './pageNotFound';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={pageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
