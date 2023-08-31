import React, {useEffect, useState} from 'react';
import {Col, Row, } from 'antd';
import {useActions} from "../../../hooks/useActions";
import GamesList from "../../widgets/GamesList/GamesList";
import GamesFilters from "../../widgets/GamesFilters/GamesFilters";
import Header from "../../widgets/Header/Header";
// @ts-ignore
import s from "./Main.module.css"

const Main: React.FC= (props) => {

    // Data
    const [sort, setSort] = useState('popularity');
    const [platform, setPlatform] = useState('browser');
    const [genre, setGenre] = useState('');

    // Вызов action-creator для списка игр
    const {fetchGames} = useActions()
    useEffect(() => {
        fetchGames(sort, platform, genre)
    }, [sort, platform, genre])

    // Event Listeners
    const changeSelectedSort = (value: string) => {
        setSort(value);
    };

    const changePlatform = (value: string) => {
        setPlatform(value);
    };

    const changeGenre = (value: string) => {
        setGenre(value);
    };

    return (
        <div className={s.main}>
            <Header/>
            <Row>
                <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <GamesFilters callbacks={[changeSelectedSort, changePlatform, changeGenre]} />
                    <GamesList />
                </Col>
            </Row>
        </div>
    );
};

export default Main;