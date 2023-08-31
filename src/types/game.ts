export interface IGame {
    id: number,
    title: string,
    thumbnail: string,
    status: string,
    short_description: string,
    description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string,
    minimum_system_requirements: {
        os: string,
        processor: string,
        memory: string,
        graphics: string,
        storage: string
    },
    screenshots: IScreenshots[],
}

export interface IScreenshots {
    id: number,
    image: string,
}

export interface GameState {
    game: IGame | null;
    loading: boolean;
    error: null | string;
    // id: number;
}
export enum GameActionTypes {
    FETCH_GAME = 'FETCH_GAME',
    FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS',
    FETCH_GAME_ERROR = 'FETCH_GAME_ERROR',
}
interface FetchGameAction {
    type: GameActionTypes.FETCH_GAME;
}
interface FetchGameSuccessAction {
    type: GameActionTypes.FETCH_GAME_SUCCESS;
    payload: IGame
}
interface FetchGameErrorAction {
    type: GameActionTypes.FETCH_GAME_ERROR;
    payload: string;
}
export type GameAction = FetchGameAction | FetchGameSuccessAction | FetchGameErrorAction