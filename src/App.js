import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WOW from 'wowjs';

import './App.css';
import './index';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bottom from './components/Bottom/Bottom';
import HomePage from './pages/HomePage/Homepage';
import GamePage from './pages/GamePage/GamePage';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Games/:platform' component={GamePage} />
        <Footer />
        <Bottom />
      </div>
    </Router>
  );
}

export default App;
