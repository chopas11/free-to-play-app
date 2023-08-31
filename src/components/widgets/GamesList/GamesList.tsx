import React from 'react';
// @ts-ignore
import s from "./GamesList.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import GameCard from "../../features/GameCard/GameCard";
import Loading from "../../UI/Loading/Loading";
import Error from "../../UI/Error/Error";

const GamesList: React.FC = () => {

    const {games, error, loading} = useTypedSelector(state => state.main)

    // Events
    // const GamesListScroll = (e: React.UIEvent<HTMLElement>) => {
    //     // if (e.currentTarget.scrollTop + e.currentTarget.clientHeight + 100 >= e.currentTarget.scrollHeight) {
    //         console.log("Da");
    //     // }
    // }

    return (
        <div className={s.list}>

            {loading ? <Loading />: ''}
            {error ? <Error />: ''}
            {games ?
                games.map(item => {
                    return (
                        <GameCard key={item.id} game={item}/>
                    )
                })
                : ''}


        </div>
    );
};

export default GamesList;