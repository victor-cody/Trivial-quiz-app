import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";
//jQuery
// import jQuery from './assets/jquery/JQUERY'
//bootstrap
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/bootstrap-icons/bootstrap-icons.css";
//animations
import "./assets/animate/animate.css";

import "./assets/sass/_variables.scss";
import "./assets/sass/App.scss";

import Loader from './components/Loader/Loader';
import Home from "./components/Homepage/Home";
// import SignUpForm from "./pages/auth/signup/Signup";
import PreGame from "./components/Pre-Game/PreGame";
// import LoginForm from "./pages/auth/login/Login";
//GameProvider
import { GameProvider } from "./contex/GameContex";
import Game from "./pages/Game/Game";
import HomePage from "./pages/Homepage/Homepage";

function App() {

  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Loader />
    )
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <GameProvider>
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/get-started" component={Home} />
            {/* <Route path="/auth/sign-up" component={SignUpForm} />
            <Route path="/auth/login" component={LoginForm} /> */}
            <Route path="/categories" component={PreGame} />
            <ProtectedRoute path="/game" component={Game} />
          </Switch>
        </div>
      </GameProvider>
    </>
  );
}

export default App;
