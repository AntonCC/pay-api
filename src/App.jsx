import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import Prefooter from './components/pre-footer/pre-footer'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Pricing from './pages/pricing/pricing'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/pricing', name: 'Pricing', component: Pricing}
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
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App;
