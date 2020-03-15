import React from 'react';
import { Routes } from './routes';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  function reducer(state = [], action) {
    switch (action.type) {
      case 'ADD': {
        return [...state, action.payload]
      }
      case 'EDIT': {
        const target = state.find(el => el.id === action.payload.id);
        const targetIndex = state.indexOf(target);
        let result = [...state];
        result.splice(targetIndex, 1, action.payload);
        return result
      }
      case 'REMOVE': {
        const temp = [...state];
        temp.splice(temp.findIndex(el => el.id === action.payload), 1);
        return temp;
      }
      default:
        return state
    }
  }
  const store = createStore(reducer);

  return (
    <BrowserRouter>
      <Routes store={store} />
    </BrowserRouter>
  );
}

export default App;
