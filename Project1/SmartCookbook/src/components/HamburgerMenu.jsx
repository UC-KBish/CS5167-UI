import userData from '../data/users.json'

function HamburgerMenu() {
    const handleInputChange = () => {
        const menu = document.getElementById('menu');
        const menu_button = document.getElementById('menu-button');
        const menu_button_back = document.getElementById('menu-button-back');

        if (menu.style.left === '60%') {
            menu.style.left = '100%';
            menu_button.style.right = '0.5rem';
            menu_button_back.style.right = '-2rem';
        } else {
            menu.style.left = '60%';
            menu_button.style.right = '2.5rem';
            menu_button_back.style.right = '0.5rem';
        }
    };

    const user = userData.Users[userData.Selected]
    const userStr = JSON.stringify(userData)

    return (<div id='HamburgerContainer'>
        <p id='userdata' hidden>{userStr}</p>
        <div id="menu" class="hidden">
            <a id='UserContainer' href='/'>
                <img id='UserPhoto' src={user.Photo} />
                <h3 id='UserName'>{user.UserName}</h3>
            </a>
            <ul>
                <li><a href="/search">Search</a></li>
                <li><a href="#">Saved</a></li>
            </ul>
        </div>
        <button id="menu-button" onClick={handleInputChange}>
            <img src='HamburgerMenu.png' />
        </button>
        <button id="menu-button-back" onClick={handleInputChange}>
            <img src='ArrowBack.png' />
        </button>
    </div>);
}

export default HamburgerMenu;