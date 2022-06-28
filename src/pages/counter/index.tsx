import React, {useContext} from 'react';
import {CounterStoreContext} from "../../stores/counter";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
    const counterStore = useContext(CounterStoreContext)

    return (
        <div>
            <div>{counterStore.count}</div>
            <button onClick={() => counterStore.count++}>+</button>
        </div>
    );
});

export default Counter;