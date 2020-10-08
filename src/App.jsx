import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'

const routes = [
  {path: '/', name: 'Home', component: Home}
]

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {
          routes.map(({ path, name, component }) => (
            <Route key={name} exact path={path} component={component} />
          ))
        }
      </Switch>
    </div>
  );
}

export default App;
