const storesMap = new Map();

const Flux = {

    CreateStore: (storeName = '', reducer = []) => {
        if(storesMap.has(storeName))
            throw new Exception(`The store ${storeName} is already created`);
        storesMap.set(storeName, new Store(storeName, reducer));
        return storesMap.get(storeName);
    },

    GetStore: (storeName = '') => {
        if(!storesMap.has(storeName))
            throw new Exception(`Thre store ${storeName} has not been created yet`);
        return storesMap.get(storeName);
    }
}

class Store {
    
    constructor(name = '', reducer = []) {
        const [reducerInitialState, reducerFunction] = reducer;
        this.name = name;
        this.reducerFunction = reducerFunction;
        this.states = [reducerInitialState];
        this.callbackSubscribedFunctions = [];
    }

    Dispatch(action = {}) {
        const newState = this.reducerFunction(this.GetState(), action);
        this.states.push(newState);
        this.callbackSubscribedFunctions.forEach(callback => callback(newState));
    }

    GetState() {
        return this.states[this.states.length - 1];
    }

    Subscribe(callbackFunction = (state = new Object()) => {}) {
        this.callbackSubscribedFunctions.push(callbackFunction);
    }

}

module.exports = Flux;