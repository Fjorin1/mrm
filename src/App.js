import './App.css';
import React from 'react';
import { About, Header, Footer, Mermaids, Roadmap, Team } from './Containers'
import { Navbar } from './Components'
function App() {

  return (
    <div className="App">
      <div className='App-header'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Mermaids />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
