import React, { useState } from 'react';

import HamburgerMenu from './HamburgerMenu';

function Header(props) {

    const handleInputChange = () => {
        const menu = document.getElementById('menu');
        const menu_button = document.getElementById('menu-button');
        const menu_button_back = document.getElementById('menu-button-back');

        if (menu.style.right === '-50vw') {
            menu.style.right = '-100vw';
            menu_button.style.right = '0.5rem';
            menu_button_back.style.right = '-2rem';
        } else {
            menu.style.right = '-50vw';
            menu_button.style.right = '2.5rem';
            menu_button_back.style.right = '0.5rem';
        }
    };

    let title = <h1 style={{ marginLeft: '10px', fontSize: '200%' }}>{props.title}</h1>;

    if (props.backToIndex) {
        title = <a href='/' style={{ textDecoration: 'none', 'color': 'black' }}>{title}</a>
    }

    return (
        <header>
            {title}
            <div id="menu" class="hidden">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="/">Search</a></li>
                    <li><a href="#">Saved</a></li>
                </ul>
            </div>
            <button id="menu-button" onClick={handleInputChange}>
                <img src='HamburgerMenu.png' />
            </button>
            <button id="menu-button-back" onClick={handleInputChange}>
                <img src='ArrowBack.png' />
            </button>

        </header>
    );

}

export default Header