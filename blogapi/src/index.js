import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Loginin from './components/loginin';
// import Logoutout from './components/logoutout';


const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
          <Route exact path="/" component={App} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/logout" component={Logout} exact/>
          <Route path="/loginin" component={Loginin} exact />
          {/* <Route path="/logoutout" component={Logoutout} exact /> */}
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// serviceWorker.unregister();


