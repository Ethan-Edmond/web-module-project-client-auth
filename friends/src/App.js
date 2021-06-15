import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/friends' component={FriendsList}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
