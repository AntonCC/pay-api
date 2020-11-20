import React, { useState, useEffect, useContext } from 'react';
import { WidthContext } from './contexts/widthContext'
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import { WidthProvider } from './contexts/widthContext'
import debounce from './helperFuncs/debounce'
import ScrollTop from './components/scroll-top/scroll-top'

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

  const [width, setWidth] = useContext(WidthContext)

  const debouncedHandleWidth = debounce(() => {
    setWidth(window.innerWidth)
  }, 75)

  useEffect(() => {
    // Call once on load then event listener handles resize.
    setWidth(window.innerWidth)

    window.addEventListener('resize', debouncedHandleWidth)

    return () => {
      window.removeEventListener('resize', debouncedHandleWidth)
    }
  })

  const togglePrefooter = bool => {
    setShowPrefooter(bool)
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

const routes = [
  {path: '/', name: 'Home', component: <Home />},
  {path: '/pricing', name: 'Pricing', component: <Pricing />},
  {path: '/about', name: 'About', component: <About />},
  {path: '/contact', name: 'Contact', component: <Contact togglePrefooter={togglePrefooter}/>}
]

  return (
    <div className="App">
      <ScrollTop />
      <NavBar toggleSidebar={toggleSidebar} />
      <Sidebar  showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="app-content">
        <Switch>
          {
            routes.map(({ path, name, component }) => (
              <Route key={name} exact path={path} render={() => component} />
            ))
          }
        </Switch>
      </div>
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
