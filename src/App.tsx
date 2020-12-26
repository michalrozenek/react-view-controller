import React from 'react';

import { Form } from './shared/containers/Form';
import { Counter } from './shared/components/Counter';
import { Header } from './shared/components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title={'My app'} />
      <Form />
      <Counter initialCount={10}/>
    </div>
  );
}

export default App;
