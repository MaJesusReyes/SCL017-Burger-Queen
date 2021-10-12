import React from "react";
import { useHistory } from "react-router-dom";
import "../components/css/lobby.css";

export const Lobby = () => {
    let history = useHistory();

    return(
    <div className='container'>
    
    <div className='page_container'>
    <div className='left_container'>
        <button onClick={() => { history.push('/waiter') }} id='waiter_btn' className='lobby_btn'> W A I T E R </button>
        <button onClick={() => { history.push('/kitchen') }} id='kitchen_btn' className='lobby_btn'> K I T C H E N </button>
    </div>
    <div className='right_container'>
        <img className='lobby_logo' src={require('./img/logo.png').default} alt='logo' />
        <p>THE HEARTLESS BISTRO</p>
    </div>
    </div>

    </div>
    )
};

export default Lobby;