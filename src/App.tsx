import React from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import BookList from './components/BookList/BookList';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Title />
      <BookList />
      <Footer />
    </div>
  );
}

export default App;
