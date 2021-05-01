import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SingPage from './pages/SignPage';
import style from '../src/styles/components/App.module.css'

function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
