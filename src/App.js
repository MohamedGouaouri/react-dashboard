import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './components/pages/home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductList from './components/pages/productList/ProductList';


function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
            <Sidebar />
            <Switch >
              <Route  exact path="/">
                <Home />
                <ProductList />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
