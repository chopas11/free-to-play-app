import React from 'react';
// @ts-ignore
import s from "./GamesList.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import GameCard from "../../features/GameCard/GameCard";
import Loading from "../../UI/Loading/Loading";
import Error from "../../UI/Error/Error";

const GamesList: React.FC = () => {

    const {games, error, loading} = useTypedSelector(state => state.main)

    return (
        <div className={s.list}>

            {loading ? <Loading />: ''}
            {error ? <Error />: ''}
            {games ?
                games.map(item => {
                    return (
                        <GameCard game={item}/>
                    )
                })
                : ''}


        </div>
    );
};

export default GamesList;