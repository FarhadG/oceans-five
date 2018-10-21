import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Dashboard from './pages/dashboard';
import Mail from './pages/mail';
import Widgets from './pages/widgets';

// ui elements
import Buttons from './pages/ui/buttons';
import Typography from './pages/ui/typography';
import Cards from './pages/ui/cards';
import Modals from './pages/ui/modals';
import Notification from './pages/ui/notification';
import Extras from './pages/ui/extras';

// forms
import FormGeneral from './pages/forms/general';
import FormAdvanced from './pages/forms/advanced';

// charts
import Charts from './pages/Payments';

// tables
import Tables from './pages/tables';

// pages
import SignIn from './pages/pages/signin';
import Register from './pages/pages/register';
import ForgetPass from './pages/pages/forget';
import Page404 from './pages/pages/404';
import PageInvoice from './pages/pages/invoice';

export default (
  <Route>
    <Route component={App} path='/'>
      <IndexRoute component={Dashboard} />
      <Route path='payments' component={Charts} />

      <Route path='widgets' component={Widgets} />
      <Route path='ui/buttons' component={Buttons} />
      <Route path='ui/typography' component={Typography} />
      <Route path='ui/cards' component={Cards} />
      <Route path='ui/modals' component={Modals} />
      <Route path='ui/notification' component={Notification} />
      <Route path='ui/extras' component={Extras} />
      <Route path='forms/general' component={FormGeneral} />
      <Route path='forms/advanced' component={FormAdvanced} />
      <Route path='charts' component={Charts} />
      <Route path='tables' component={Tables} />
    </Route>
    <Route component={Mail} path='mail' />
    <Route component={SignIn} path='pages/signin' />
    <Route component={Register} path='pages/register' />
    <Route component={ForgetPass} path='pages/forget' />
    <Route component={Page404} path='pages/404' />
    <Route component={PageInvoice} path='pages/invoice' />
    {/* default */}
    <Route component={Page404} path='404' />
    <Redirect from="*" to="/" />
  </Route>
);
