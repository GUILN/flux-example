const loginReducer = require("./loginReducer");
const flux = require("./flux");

module.exports = class ComponentA {
    constructor() {
        this.componentName = 'A';
        this.loginStore = flux.GetStore(loginReducer.reducerStoreIdentifier);
        this.loginStore.Subscribe((newState) => {
            console.log(`Component A has been affected for state changing, new state: ${JSON.stringify(newState)}`);
        });
    }

    logMeIn() {
        const [loginAction] = loginReducer.loginActions;
        const customAction = {...loginAction, loginFrom: 'Component A'};
        this.loginStore.Dispatch(customAction);
    }
}