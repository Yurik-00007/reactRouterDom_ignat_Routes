import React from 'react';
import './App.css';
import s from './App.module.css';
import {Link, NavLink, Route, Routes} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <div className={'nav'}>
                <div><NavLink to={'/'}>main</NavLink></div>
                {/*стили через style*/}
                <div><NavLink style={{color: 'orange'}} to={'/login'}>login_NavLink</NavLink></div>
                {/*стили через className и module.css*/}
                <div><NavLink className={s.def} to={'/login'}>login_NavLink</NavLink></div>
                {/*вообще Link не поддерживают style и className*/}
                <div><Link style={{color: 'orange'}} to={'/login'}>login_Link</Link></div>
                {/*NavLink можно применять стили через style или className*/}
                <div><NavLink
                    style={
                        (params) => (
                            {
                                color: params.isActive ? 'yellowgreen' : 'black',
                                textDecoration: params.isPending ? 'underline dotted' : 'none',
                            })
                    }
                    to={'/users'}>users</NavLink></div>
                <div><NavLink
                    style={(params) => (
                        {color: params.isActive ? 'lime' : 'black'})
                    }
                    to={'/profile'}>profile_NavLink</NavLink></div>
                <div><Link
                    //не поддерживает style и className
                    /*
                                    style={(params)=>(
                                        {color:params.isActive?'lime':'black'})
                                }
                    */
                    to={'/profile'}>profile_Link</Link></div>
                <div><NavLink
                    className={({isActive}) => isActive ? 'act' : 'def'}
                    to={'/profile/settings'}
                >
                    settings
                </NavLink>
                </div>
                <div><Link
                    //не поддерживает style и className
                    // className={({isActive})=>isActive?'act':'def'}
                    to={'/profile/settings'}
                >
                    settings_Link
                </Link>
                </div>
                <a
                    href="https://github.com/Yurik-00007/reactRouterDom_ignat_NavLinks"
                    target={'_blank'}
                >
                    xxx
                </a>
            </div>

            <div className={'context'}>
                <Routes>
                    <Route path={'/*'} element={<div>404</div>}/>
                    <Route path={'/'} element={<div>main</div>}/>
                    <Route path={'/login'} element={<div>login</div>}/>
                    <Route path={'/users'} element={<div>users</div>}/>
                    <Route path={'/profile'} element={<div>profile</div>}/>
                    <Route path={'/profile/settings'} element={<div>settings</div>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;


