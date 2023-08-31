import {GameAction, GameActionTypes, GameState} from "../../types/game";

const initialState: GameState = {
    game: null,
    loading: false,
    error: null,
    // id: 0,
}

export const gameReducer = (state = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionTypes.FETCH_GAME:
            return {loading: true, error: null, game: null}
        case GameActionTypes.FETCH_GAME_SUCCESS:
            return {loading: false, error: null, game: action.payload}
        case GameActionTypes.FETCH_GAME_ERROR:
            return {loading: false, error: action.payload, game: null}
        default:
            return state
    }
}