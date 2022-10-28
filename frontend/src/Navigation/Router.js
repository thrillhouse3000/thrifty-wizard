import {Routes, Route} from "react-router-dom"
import Home from "../Home";
import GamePage from "../Games/GamePage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/:game_slug' element={<GamePage/>} />
            </Routes>
        </>
    )
}

export default Router;