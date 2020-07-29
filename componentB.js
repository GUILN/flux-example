const loginReducer = require("./loginReducer");
const flux = require("./flux");

module.exports = class ComponentB {
    constructor() {
        this.componentName = 'B';
        this.loginStore = flux.GetStore(loginReducer.reducerStoreIdentifier);
        this.loginStore.Subscribe((newState) => {
            console.log(`Component B has been affected for state changing, new state: ${JSON.stringify(newState)}`);
        });
    }

    logMeOut() {
        const [ , logoutAction] = loginReducer.loginActions;
        const customAction = {...logoutAction, logoutFrom: 'Component B'};
        this.loginStore.Dispatch(customAction);
    }
}