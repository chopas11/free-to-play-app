import React from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
// @ts-ignore
import s from "./GameLeftSide.module.css"

interface GameLeftSideProps {
    thumbnail: string | undefined,
}

const GameLeftSide: React.FC<GameLeftSideProps> = ({thumbnail}) => {
    return (
        <div>
            <img className={s.game__img} src={thumbnail} alt="" />
            <NavLink to='/'><MyButton text="Back to Main"></MyButton></NavLink>
        </div>
    );
};

export default GameLeftSide;