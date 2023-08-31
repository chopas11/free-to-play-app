import {GameAction, GameActionTypes} from "../../types/game";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchGame = (id: number) => {
    return async (dispatch: Dispatch<GameAction>) => {
        try {
            dispatch({type: GameActionTypes.FETCH_GAME})

            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
                timeout: 5000,
                params: {id},
                headers: {
                    'X-RapidAPI-Key': '3f222b3e0fmshe37519aa3d846bbp1e9ec1jsnbc984602b6c3',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            const response = await axios.request(options)
            setTimeout(() => {
                dispatch({
                    type: GameActionTypes.FETCH_GAME_SUCCESS,
                    payload: response.data,
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: GameActionTypes.FETCH_GAME_ERROR,
                payload: 'Произошла ошибка при загрузке конкретной игры'
            })
        }
    }
}