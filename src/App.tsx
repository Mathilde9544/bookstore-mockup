import React from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import BookList from './components/BookList/BookList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Title />
      <BookList />
    </div>
  );
}

export default App;
