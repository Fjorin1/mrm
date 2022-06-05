import React from 'react'
import './header.css'

const Header = () => (
    <div className="mermaid__header section__padding" id="home">
        <div className="mermaid__header-content">
            <h1 className="gradient__text "></h1>
            <div className="mermaid__header-discord">
                <button onClick={btnClick}>Join Discord</button>
            </div>
        </div>
    </div>
);

const btnClick = () => {
    window.open("http://discord.com/");
}
export default Header;