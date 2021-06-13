import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {HarperDBProvider} from 'use-harperdb';
//jQuery
// import jQuery from './assets/jquery/JQUERY'
//bootstrap
import './assets/bootstrap/bootstrap.min.css';
import './assets/bootstrap-icons/bootstrap-icons.css';
//animations
// import './assets/wow/wow.min.js'
import './assets/animate/_animations.scss'

import './assets/sass/_variables.scss';
import './assets/sass/App.scss';
import Home from "./components/Homepage/Home";
import SignUpForm from "./pages/auth/signup/Signup";
import PreGame from "./components/Pre-Game/PreGame";

function App() {

  return (
    <>
    <HarperDBProvider
        url={process.env.REACT_APP_INSTANCE_URL}
        user={process.env.REACT_APP_USER}
        password={process.env.REACT_APP_PASSWORD}
        >
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sign-up'  component={SignUpForm} />
            <Route path='/categories' component={PreGame} />
          </Switch>
        </Router>
    </HarperDBProvider>
            
    </>
  );
}

export default App;
