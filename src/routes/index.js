import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import Main from '../pages/main';


const routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default routes;
