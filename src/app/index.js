import React from 'react';
import { Route, Link } from 'react-router-dom'
import SignIn from '../SignIn'
import Chat from '../Chat'
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Sign In</Link>
            <Link to="/chat">Chat</Link>
          </header>

          <main>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/chat" component={Chat}/>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App