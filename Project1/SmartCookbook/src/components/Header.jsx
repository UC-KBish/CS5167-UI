function Header(props) {

    if (props.backToIndex) {
        return (<>
            <div className='flex' style={{ minWidth: '100%', height: '60px', backgroundColor: '#c0c0c0', top: '0', position: 'absolute', justifyContent: 'center' }}/>
            <div className='flexVerticallyAlligned'>
                <a href='/' style={{textDecoration: 'none', 'color': 'black'}}>
                <h1 style={{ marginLeft: '10px', fontSize: '200%' }}>{props.title}</h1>
                </a>
                <img src='HamburgerMenu.png' style={{ maxWidth: '60%', maxHeight: '60%', marginRight: '20px' }}></img>
            </div>
            </>);
    }
    return (<>
            <div className='flex' style={{ minWidth: '100%', height: '60px', backgroundColor: '#c0c0c0', top: '0', position: 'absolute', justifyContent: 'center' }}/>
        <div className='flexVerticallyAlligned'>
            <h1 style={{ marginLeft: '10px', fontSize: '200%' }}>{props.title}</h1>
            <img src='HamburgerMenu.png' style={{ maxWidth: '60%', maxHeight: '60%', marginRight: '20px' }}></img>
        </div>
        </>);
    

}

export default Header