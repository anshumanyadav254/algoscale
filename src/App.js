import './App.css';
import Landingpage from './Components/Landingpage';
//import UserList from './Components/UserList';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Conatct from './Components/Conatct'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landingpage/>
        </Route>
        <Route path="/contact">
          <Conatct/>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
