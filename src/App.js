import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import style from '../src/styles/components/App.module.css'
import TaskPage from './pages/TaskPage';
import TaskEditPage from './pages/TaskEditPage';
import TaskListPage from './pages/TaskListPage';
import SignIn from './routes/SignIn';
import SignUp from './routes/SingUp';

function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/task-list" component={TaskListPage} />
          <Route exact path="/task-form" component={TaskPage} />
          <Route exact path="/task/edit" component={TaskEditPage} />

          <Route exact path="/user/auth" component={SignIn} />
          <Route exact path="/user/create" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
