import {MainAction, MainActionTypes, MainState} from "../../types/main";

const initialState: MainState = {
    games: [],
    loading: false,
    error: null
}

export const mainReducer = (state = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.FETCH_GAMES:
            return {loading: true, error: null, games: []}
        case MainActionTypes.FETCH_GAMES_SUCCESS:
            return {loading: false, error: null, games: action.payload}
        case MainActionTypes.FETCH_GAMES_ERROR:
            return {loading: false, error: action.payload, games: []}
        default:
            return state
    }
}