import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Game from "../Game/Game";


const AppRouter: React.FC= (props) => {
    return (
            <Routes>
                {/*{routes.map(({path, Component}) =>*/}
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/game/:id'} element={<Game />}/>
                {/*<Route path={'/'}>*/}
            </Routes>
    );
};

export default AppRouter;