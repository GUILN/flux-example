module.exports = {
    reducerStoreIdentifier: 'user-login',
    loginActions: [{type: 'login'}, {type: 'logout'}],
    loginStates: [{type: 'loggedIn'}, {type: 'notLogged'}],

    loginReducerFunction: (currentState, action) => {
        let newState = {};
        if(currentState.type === 'loggedIn') {
            newState = action.type === 'logout' ?  {...currentState, type: 'notLogged'} : {...currentState, type: 'loggedIn'};
        } else if(currentState.type === 'notLogged') {
            newState = action.type === 'logout' ?  {...currentState, type: 'notLogged'} : {...currentState, type: 'loggedIn'};
        }

        return newState;
    }
}