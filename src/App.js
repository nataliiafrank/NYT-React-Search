import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import SavedArticles from './components/SavedArticles';

class App extends Component {
  render() {
    return (

      <div className="App container">

        {/* Header */}
        <Header />

        {/* Row for Search */}
        <Search />
      
        {/* Row for search Results*/}
        <Results />
    
        {/* Saved Articles */}
        <SavedArticles/>
      
      </div>
    );
  }
}

export default App;
