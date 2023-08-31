export interface IGames {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string
}

export interface MainState {
    games: IGames[];
    loading: boolean;
    error: null | string;
}
export enum MainActionTypes {
    FETCH_GAMES = 'FETCH_GAMES',
    FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS',
    FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR',
}
interface FetchGamesAction {
    type: MainActionTypes.FETCH_GAMES;
}
interface FetchGamesSuccessAction {
    type: MainActionTypes.FETCH_GAMES_SUCCESS;
    payload: any[]
}
interface FetchGamesErrorAction {
    type: MainActionTypes.FETCH_GAMES_ERROR;
    payload: string;
}
export type MainAction = FetchGamesAction | FetchGamesSuccessAction | FetchGamesErrorAction