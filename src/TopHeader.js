import React from 'react';



/**
 * Top header component, provided with logo and title as text
 */
function TopHeader(props) {
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.title}</h1>
        </header>
    )
}



export default TopHeader;