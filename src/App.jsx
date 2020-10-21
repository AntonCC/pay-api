import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Prefooter from './components/pre-footer/pre-footer'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Pricing from './pages/pricing/pricing'
import About from './pages/about/about'
import Contact from './pages/contact/contact'

const App = () => {
  const [showPrefooter, setShowPrefooter] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)

  const togglePrefooter = bool => {
    setShowPrefooter(bool)
  }

  const toggleSidebar = bool => {
    setShowSidebar(bool)
  }

const routes = [
  {path: '/', name: 'Home', component: <Home />},
  {path: '/pricing', name: 'Pricing', component: <Pricing />},
  {path: '/about', name: 'About', component: <About />},
  {path: '/contact', name: 'Contact', component: <Contact togglePrefooter={togglePrefooter}/>}
]

  return (
    <div className="App">
      <NavBar toggleSidebar={toggleSidebar} />
      <Sidebar  showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Switch>
        {
          routes.map(({ path, name, component }) => (
            <Route key={name} exact path={path} render={() => component} />
          ))
        }
      </Switch>
      {
        showPrefooter 
          ? <Prefooter />
          : ''
      }
      <Footer />
    </div>
  );
}

export default App;
