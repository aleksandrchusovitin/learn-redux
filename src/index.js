import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const incBtn = document.querySelector('#inc');
const decBtn = document.querySelector('#dec');
const rndBtn = document.querySelector('#rnd');
const counterEl = document.querySelector('#counter');

const initialState = { value: 0 };

// reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INC':
      return ({ ...state, value: state.value + 1 });
    case 'DEC':
      return ({ ...state, value: state.value - 1 });
    case 'RND':
      return ({ ...state, value: state.value * payload });
    default:
      return state;
  }
}

// Store create
const store = createStore(reducer);

const updateCounter = () => {
  counterEl.textContent = store.getState().value;
};

// Subscribe store
store.subscribe(updateCounter);

// Action Creators
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'INC', payload: value });

incBtn.addEventListener('click', (e) => {
  store.dispatch(inc());
});

decBtn.addEventListener('click', (e) => {
  store.dispatch(dec());
});

rndBtn.addEventListener('click', (e) => {
  const rndValue = Math.floor(Math.random() * 10);
  store.dispatch(rnd(rndValue));
});

ReactDOM.render(
  <React.StrictMode>
    <>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
