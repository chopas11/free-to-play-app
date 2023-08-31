import React from 'react';
// @ts-ignore
import s from "./GameCard.module.css";
import {NavLink} from "react-router-dom";
import {IGames} from "../../../types/main"

interface GameCardProps {
    game: IGames,
}

const GameCard:React.FC<GameCardProps> = ({game}) => {
    return (
        <NavLink key={game.id} to={`/game/${game.id}`}>
            <div className={s.card}>
                <img src={game.thumbnail} alt="Alt" className={s.card__img}/>
                <div className={s.card__description}>
                    <h3 className={s.card__description__name}>{game.title}</h3>
                    <div className={s.card__description__date}>{game.release_date}</div>
                    <div className={s.card__description__publisher}>{game.publisher}</div>
                    <div className={s.card__description__publisher}>{game.platform}</div>
                    <span className={s.card__description__genre}>{game.genre}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default GameCard;