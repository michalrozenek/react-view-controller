import React from 'react';

import { CounterView } from './Counter.view';
import { CounterControllerProps } from './Counter.types';

const CounterController: React.FC<CounterControllerProps> = ({ initialCount }) => {
  const [count, setCount] = React.useState<number>(initialCount || 0);

  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  return (
    <CounterView
      count={count}
      increase={increase}
      decrease={decrease}
    />
  )
}

export const Counter = CounterController;