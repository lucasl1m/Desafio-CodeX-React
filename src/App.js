import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TaskPage from './pages/TaskPage';
import TaskEditPage from './pages/TaskEditPage';
import SignIn from './routes/SignIn';
import SignUp from './routes/SingUp';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/user/create" component={SignUp} />
          <Route exact path="/home" component={Home} />  
          <Route exact path="/task/create" component={TaskPage} />
          <Route exact path="/task/edit" component={TaskEditPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
