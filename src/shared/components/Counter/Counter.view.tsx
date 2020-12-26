import React from 'react';
import { CounterViewProps } from './Counter.types';

export const CounterView: React.FC<CounterViewProps> = ({ count, increase, decrease }) => (
  <div className={'counter'}>
    <div>{count}</div>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
  </div>
);