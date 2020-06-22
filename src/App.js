import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Reservation} from './Reservation';
import {NoMatch} from './NoMatch';
import {NavigationBar} from './components/NavigationBar';
import {Footer} from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/reservation" component={Reservation} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
