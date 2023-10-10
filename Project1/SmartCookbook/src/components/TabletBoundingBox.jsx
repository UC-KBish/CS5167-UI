function TabletBoundingBox(props) {
    let height = window.innerHeight - 10;
    let width = window.innerWidth;
    const SCREEN_RATIO = 1080 / 810; // iPad ratio

    // Get an iPad screen size
    if (width * SCREEN_RATIO > height) {
        width = height / SCREEN_RATIO;
    }
    else {
        height = width * SCREEN_RATIO;
    }

    return (
        <div style={{ position: 'relative', borderColor: '#000000', borderWidth: '5px', borderStyle: 'solid', height: height, width: width, backgroundColor: "#c0c0c0", margin: 'auto', overflow: 'auto' }}>
            {props.children}
        </div>
    );
}

export default TabletBoundingBox