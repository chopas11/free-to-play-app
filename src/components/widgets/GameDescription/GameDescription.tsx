import React from 'react';
import {IGame} from "../../../types/game";
import {NavLink} from "react-router-dom";
import GameParams from "../../features/GameParams/GameParams";
import GameScreenshots from "../../features/GameScreenshots/GameScreenshots";
// @ts-ignore
import s from "./GamesDescription.module.css"

interface GameDescriptionProps {
    game: IGame | null,
}

const GameDescription: React.FC<GameDescriptionProps> = ({game}) => {
    return (
        <div className={s.games__description}>
            <p>
                <NavLink to='/'>Home </NavLink>
                {'>'}
                <NavLink to='/'> Free games </NavLink>
                {'>'}
                <NavLink to={window.location.href}> {game?.title} </NavLink>
            </p>
            <h1>{game?.title}</h1>
            <h2>About {game?.title}</h2>
            <p>{game?.description}</p>
            <br/>
            <h2>Additional Information</h2>
            <GameParams params={[
                {label: "Title", value: game?.title},
                {label: "Developer", value: game?.developer},
                {label: "Publisher", value: game?.publisher},
                {label: "Release_date", value: game?.release_date},
                {label: "Genre", value: game?.genre},
                {label: "Platform", value: game?.platform},
            ]} rows={3} />
            <br/>
            <h2>{game?.title} Screenshots</h2>
            <GameScreenshots screenshots={game?.screenshots} />
            <br/>
            <h2>Minimum System Requirements ({game?.platform})</h2>
            <GameParams params={[
                {label: "OS", value: game?.minimum_system_requirements.os},
                {label: "Processor", value: game?.minimum_system_requirements.processor},
                {label: "Memory", value: game?.minimum_system_requirements.memory},
                {label: "Graphics", value: game?.minimum_system_requirements.graphics},
                {label: "Storage", value: game?.minimum_system_requirements.storage},
                {label: "Additional Notes", value: "Specifications may change during development"},
            ]} rows={2} />
            <br/>
        </div>
    );
};

export default GameDescription;