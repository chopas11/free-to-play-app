import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import {gameReducer} from "./gameReducer";


export const rootReducer = combineReducers({
    main: mainReducer,
    game: gameReducer
})

export type RootState = ReturnType<typeof rootReducer>