const initialState = {
    name: "Janet Doolittle",
    loggedIn: false
};

export function userReducer(state = initialState, action) {
    return state;
}

export const getName = (state) => state.user.name;