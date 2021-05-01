import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import style from '../src/styles/components/App.module.css'
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TaskPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
