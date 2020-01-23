import React from 'react'
import './App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import {Route, Link, Switch} from 'react-router-dom'
class App extends React.Component{
render(){
  return(
   <div>
     <switch>
     <Route exact path= "/" component={Home} />
     <Route exact path= "/rooms/"  component={Rooms} />
     <Route exact path= "/rooms/:slug"  component={SingleRoom} />
     <Route component={Error} />
    </switch>
  </div>
  )
}
}
export default App