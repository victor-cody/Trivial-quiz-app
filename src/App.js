import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import PreGame from "./components/Pre-Game/PreGame";

function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/categories' component={PreGame} />
      </Switch>
    </Router>
        
    </>
  );
}

export default App;
