import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import CounterStoreContext from '../../stores/counter';

const Counter = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <div>
      <div>{counterStore.count}</div>
      <button type="button" onClick={() => counterStore.count++}>
        +
      </button>
    </div>
  );
});

export default Counter;
