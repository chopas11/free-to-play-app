import React from 'react';
import {IScreenshots} from "../../../types/game";
import Error from "../../UI/Error/Error";
// @ts-ignore
import s from "./GameScreenshots.module.css"
import {Carousel} from "antd";

interface GameScreenshotsProps {
    screenshots: IScreenshots[] | undefined,
}

const GameScreenshots: React.FC<GameScreenshotsProps> = ({screenshots}) => {
    return (
        <Carousel>
            { screenshots ? screenshots.map(item => <div key={item.id}><img className={s.screenshot} src={item.image} alt="" /></div>) : <Error />}
        </Carousel>
    );
};

export default GameScreenshots;