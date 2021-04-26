import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataProvider } from './components/DataProvider';
import Details from './components/Details';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Router>
          <Header />
          <section>
            <Switch>
              <Route exact path='/' component={Products} />
              <Route exact path='/products' component={Products} />
              <Route path='/products/:id' component={Details} />
              <Route path='/cart' component={Cart} />
            </Switch>
          </section>
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
