import React from 'react';
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (<Login />
        ): (
          <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;
