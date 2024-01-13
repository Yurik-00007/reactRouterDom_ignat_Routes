import React from 'react';
import './App.css';
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";

const Profile=()=>{
    const navigate=useNavigate()
    return(
        <div>
            provile
            <button onClick={()=>{navigate('/login')}}>logout</button>
        </div>
    )
}

function App() {

    return (
        <div className="App">
            <div className={'nav'}>
                <div><NavLink to={'/'}>main</NavLink></div>
                <div><NavLink to={'/login'}>login</NavLink></div>
                <div><NavLink
                    to={'/profile'}>profile</NavLink></div>
                <div><NavLink
                    to={'/profile/settings'}
                >
                    settings
                </NavLink>
                </div>
            </div>

            <div className={'context'}>
                <Routes>
                    <Route path={'/*'} element={<div>404</div>}/>
                    <Route path={'/'} element={<div>main</div>}/>
                    <Route path={'/login'} element={<div>login</div>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/profile/settings'} element={<div>settings</div>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;


