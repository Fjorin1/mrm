import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo_White_Transparent.png';
import instagram from '../../assets/Instagram.svg';
import twitter from '../../assets/Twitter.svg';
import opensea from '../../assets/OpenSea_1.svg';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const btnClickInstagram = () => {
        window.open("http://instagram.com/");
    }
    const btnClickTwitter = () => {
        window.open("https://twitter.com/");
    }

    const btnClickOpersea = () => {
        window.open("https://opensea.io/");
    }

    return (
        <div className={"mermaid__navbar"}>
            <div className="mermaid__navbar-links_logo">
                <a href="#home"><img src={logo} alt="logo" /></a>
            </div>
            <div className="mermaid__navbar-links">

                <div className="mermaid__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#mermaids">Mermaids</a></p>
                    <p><a href="#roadmap">Roadmap</a></p>
                    <p><a href="#team">Team</a></p>
                </div>
            </div>
            <div className="mermaid__navbar-links-icons">
                <img src={instagram} alt="instagram" onClick={btnClickInstagram} />
                <img src={twitter} alt="twitter" onClick={btnClickTwitter} />
                <img src={opensea} alt="opensea" onClick={btnClickOpersea} />
            </div>
            <div className="mermaid__navbar-wallet">
                <button type="button" >Connect Wallet</button></div>
            <div className="mermaid__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="mermaid__navbar-menu_container scale-up-center">
                        <div className="mermaid__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#mermaids">Mermaids</a></p>
                            <p><a href="#roadmap">Roadmap</a></p>
                            <p><a href="#team">Team</a></p>
                        </div>
                        <div className="mermaid__navbar-menu_container-links-wallet">
                            <button type="button">Connect Wallet</button>
                        </div>
                        <div className="mermaid__navbar-menu-links-icons">
                            <img src={instagram} alt="instagram" onClick={btnClickInstagram} />
                            <img src={twitter} alt="twitter" onClick={btnClickTwitter} />
                            <img src={opensea} alt="opensea" onClick={btnClickOpersea} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default Navbar