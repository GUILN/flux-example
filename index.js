const flux = require("./flux");
const loginReducer = require("./loginReducer");
const ComponentB = require('./componentB');
const ComponentA = require('./componentA');


const loginStore = flux.CreateStore(loginReducer.reducerStoreIdentifier, 
                    [{type: 'loggedIn'}, loginReducer.loginReducerFunction]);

loginStore.Subscribe((state) => {
    console.log(`The new state is ${JSON.stringify(state)}`);
});

const compA = new ComponentA();
const compB = new ComponentB();

compA.logMeIn();
compB.logMeOut();

