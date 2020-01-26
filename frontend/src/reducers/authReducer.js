import actions from '../actions';

const initialState = {
    login: false,
    userName: '',
    firstName: '',
    lastName: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        //update login redux state
        case actions.UPDATE_LOGIN:
            return {
                ...state,
                login: true,
                userName: action.userName,
                firstName: action.firstName,
                lastName: action.lastName
            }

        //update logout redux state
        case actions.UPDATE_LOGOUT:
            return initialState
        
        //return initial state
        default:
            return state;
    }
}

export default reducer;