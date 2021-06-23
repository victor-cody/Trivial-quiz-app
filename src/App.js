import { Route, Switch } from "react-router-dom";
//jQuery
// import jQuery from './assets/jquery/JQUERY'
//bootstrap
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/bootstrap-icons/bootstrap-icons.css";
//animations
// import './assets/wow/wow.min.js'
import "./assets/animate/_animations.scss";

import "./assets/sass/_variables.scss";
import "./assets/sass/App.scss";
import Home from "./components/Homepage/Home";
import SignUpForm from "./pages/auth/signup/Signup";
import PreGame from "./components/Pre-Game/PreGame";
import LoginForm from "./pages/auth/login/Login";
//GameProvider
import { GameProvider } from "./contex/GameContex";

function App() {
  return (
    <>
        <GameProvider>

          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/auth/sign-up" component={SignUpForm} />
            <Route path="/auth/login" component={LoginForm} />
            <Route path="/categories" component={PreGame} />

          </Switch>

        </GameProvider>

    </>
  );
}

export default App;
