import React from 'react';
import {Route, Routes} from "react-router-dom";
// import {routes} from "./routes"
import Main from "../components/pages/Main/Main";
import Game from "../components/pages/Game/Game";

const AppRouter = () => {
    return (
            <Routes>
                {/*{routes.map(({path, Component}) =>*/}
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/game/:id'} element={<Game/>}/>
                {/*)}*/}
            </Routes>
    );
};

export default AppRouter;