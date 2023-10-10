import React, { useState } from 'react';

function Header(props) {

    const [inputValue, setInputValue] = useState("");

    const menu = document.getElementById('menu');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        if (menu.style.right === '-250px') {
            menu.style.right = '0';
        } else {
            menu.style.right = '-250px';
        }


    };


    if (props.backToIndex) {
        return (<>
            <div className='flex' style={{ minWidth: '100%', height: '60px', backgroundColor: '#c0c0c0', top: '0', position: 'absolute', justifyContent: 'center' }} />
            <div className='flexVerticallyAlligned'>
                <a href='/' style={{ textDecoration: 'none', 'color': 'black' }}>
                    <h1 style={{ marginLeft: '10px', fontSize: '200%' }}>{props.title}</h1>
                </a>
                <img src='HamburgerMenu.png' style={{ maxWidth: '60%', maxHeight: '60%', marginRight: '20px' }}></img>
            </div>
        </>);
    }
    return (<>
        <div className='flex' style={{ minWidth: '100%', height: '60px', backgroundColor: '#c0c0c0', top: '0', position: 'absolute', justifyContent: 'center' }} />
        <div className='flexVerticallyAlligned'>
            <h1 style={{ marginLeft: '10px', fontSize: '200%' }}>{props.title}</h1>
            <div id="menu" class="hidden">
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </div>
            <button id="menu-button" onClick={handleInputChange}>
                <img src='HamburgerMenu.png' style={{ maxWidth: '60%', maxHeight: '60%', marginRight: '20px' }} />
            </button>
        </div>
    </>);
}

export default Header