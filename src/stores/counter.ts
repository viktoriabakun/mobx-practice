import {observable} from "mobx";
import {createContext} from "react";

class Counter {
    @observable count = 0;
}

export const CounterStoreContext = createContext(new Counter());