import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { RateMovie } from '../pages/RateMovie'
import { MoviePreview } from '../pages/MoviePreview'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/profile" element={ <Profile/> } />
            <Route path="/ratemovie" element={ <RateMovie/> }/>
            <Route path="/moviepreview" element={ <MoviePreview/> } />
        </Routes>
    )
}