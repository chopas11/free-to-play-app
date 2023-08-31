import {MainAction, MainActionTypes} from "../../types/main";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchGames = (sort: string, platform: string, genre: string) => {
    return async (dispatch: Dispatch<MainAction>) => {
        try {
            dispatch({type: MainActionTypes.FETCH_GAMES})
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                params: {
                    // platform: platform,
                    // category: genre,
                    // 'sort-by': sort
                },
                timeout: 5000,
                headers: {
                    'X-RapidAPI-Key': '3f222b3e0fmshe37519aa3d846bbp1e9ec1jsnbc984602b6c3',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            // if (genre) options.params.category = genre;

            const response = await axios.request(options)
            setTimeout(() => {
                dispatch({
                    type: MainActionTypes.FETCH_GAMES_SUCCESS,
                    payload: response.data
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: MainActionTypes.FETCH_GAMES_ERROR,
                payload: 'Произошла ошибка при загрузке игр'
            })
        }
    }
}