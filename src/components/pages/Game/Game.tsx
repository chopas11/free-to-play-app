import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {Row, Col} from "antd";
import Header from "../../widgets/Header/Header";
// @ts-ignore
import s from "./Game.module.css"
import GameLeftSide from "../../widgets/GameLeftSide/GameLeftSide";
import GameDescription from "../../widgets/GameDescription/GameDescription";
import Loading from "../../UI/Loading/Loading";
import Error from "../../UI/Error/Error";

const Game = () => {

    //redux
    const {game, error, loading} = useTypedSelector(state => state.game)

    // Вызов action-creator для списка игр
    const {fetchGame} = useActions()
    useEffect(() => {
        const id = Number(window.location.href.split('/').pop())
        fetchGame(id)

    }, [])

    return (
        <div className={s.game}>
            <Header/>
            <Row>
                <Col xxl={{ span: 12, offset: 6 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    {loading ? <Loading />: ''}
                    {error ? <Error />: ''}
                    {game ?
                        <Row>
                            <Col md={{span:8}} xs={{span:24}}>
                                <GameLeftSide thumbnail={game?.thumbnail} />
                            </Col>
                            <Col md={{span:16}} xs={{span:24}}>
                                <GameDescription game={game} />
                            </Col>
                        </Row>
                    : ''}

                </Col>
            </Row>
        </div>
    );
};

export default Game;