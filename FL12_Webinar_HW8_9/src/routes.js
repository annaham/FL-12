import React from 'react';
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { Courses, Form } from './pages';
import { Header, Footer } from './layout';

export function Routes({ store }) {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/form/:id" component={Form} />
          <Route path="/form" component={Form} />
        </Switch>
      </Provider>
      <Footer />
    </div>
  )
}
