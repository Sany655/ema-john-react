import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import init from './Firebase/firebase.init';
import Shipping from './components/Shipping/Shipping';
import axios from 'axios';

init()

function App() {
  // axios.defaults.baseURL = "http://localhost:5000/"
  axios.defaults.baseURL = "https://ema-john-8e6s.onrender.com"
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          {/* <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute> */}
          <PrivateRoute path='/shipping'>
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path='/order'>
            <Order></Order>
          </PrivateRoute>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
