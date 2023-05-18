import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {useState} from 'react'

import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
import BlogsList from './components/BlogsList'
import NotFound from './components/NotFound'
import DashboardContext from './context/DashboardContext'

import './App.css'

const App = () => {
  const [name, setName] = useState('Snigdha Dash')

  const handleName = event => {
    setName(event.target.value)
  }
  return (
    <DashboardContext.Provider value={{name, handleName}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BlogsList} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </DashboardContext.Provider>
  )
}

export default App
