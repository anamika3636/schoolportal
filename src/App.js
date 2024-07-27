import React from 'react'
import Body from './Body'
import Mainpae from './Mainpae'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
   <React.Fragment>
   <BrowserRouter>
    <Mainpae/>
    </BrowserRouter>
   </React.Fragment>
  )
}

export default App