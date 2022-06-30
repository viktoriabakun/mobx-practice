import { observable } from 'mobx';
import { createContext } from 'react';

class Counter {
  @observable count = 0;
}

export default createContext(new Counter());
