import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthHOC from './components/AuthHOC';
import HomeScreen from './screens/HomeScreen';
import MemberScreen from './screens/MemberScreen';
import NewsScreen from './screens/NewsScreen';
import NewsDetailsScreen from './screens/NewsDetailsScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import ThanksScreen from './screens/ThanksScreen';
import ShippingScreen from './screens/ShippingScreen';
import FixedComponent from './components/FixedComponent';
import NotFound from './screens/NotFound';
import CartAside from './components/CartAside';

const App = () => {
  const [bodyMenu, setBodyMenu] = useState(false);
  const [asideCart, setAsideCart] = useState(false);
  return (
    <Router>
      <div id='body' className={bodyMenu ? 'menuin' : ''}>
        <Header setBodyMenu={setBodyMenu} setAsideCart={setAsideCart} />
        <main>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/member' component={MemberScreen} exact />
            <Route path='/aboutus' component={AboutScreen} exact />
            <Route path='/contact' component={ContactScreen} exact />
            <Route path='/login' component={LoginScreen} exact />
            <Route path='/register' component={RegisterScreen} exact />
            <Route path='/products' component={ProductListScreen} exact />
            <Route path='/cart' component={CartScreen} exact />
            <AuthHOC path='/shipping' component={ShippingScreen} exact />
            <AuthHOC path='/thanks' component={ThanksScreen} exact />
            <Route
              path='/products/:id'
              component={ProductDetailsScreen}
              exact
            />
            <Route path='/news' component={NewsScreen} exact />
            <Route path='/news/:id' component={NewsDetailsScreen} exact />
            <Route component={NotFound} />
          </Switch>
        </main>
        <CartAside showAside={asideCart} setAsideCart={setAsideCart} />
        <FixedComponent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
