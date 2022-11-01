import React from 'react';
import Navbar from './components/Navbar';
import Mainheader from './components/Mainheader';
import CardOne from './components/CardOne';
import Goahead from './components/Goahead';
import CardTwo from './components/CardTwo';
import './index.css';
import './App.css'
import Footer from './components/Footer';
import DividerTwo from './components/DividerTwo';

const App = () => {
  return (
    <div>

     < Navbar/ >
     < Mainheader />
     < Goahead />
     < CardOne />
     < DividerTwo />
     < CardTwo />
     < Footer />

    </div>
  )
}

export default App