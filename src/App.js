import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SingPage from './pages/SignPage';

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
