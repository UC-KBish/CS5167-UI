function RecipeBottomBanner() {
    return (
        <div style={{ backgroundColor: '#e8e8e8', width: '100%', height: '50px', bottom: '0' }}>
            <div className="flex" style={{}}>
                {/* <img src="SaveForLaterTrue.png" style={{width: '30px'}}></img> */}
                <p>Info</p>
            </div>
        </div>
    )
}

function RecipeCard(props) {

    return (
        <div style={{ position: 'relative', backgroundColor: '#a0a0a0', borderRadius: '5px', overflow: 'hidden', minWidth: '100%', marginBlock: '10px' }}>
            <h3 style={{ padding: '10px', margin: 0 }}>{props.name}</h3>
            <img src={props.imageName} style={{ width: '90%', margin: '5%', borderRadius: '5px' }}></img>
            {RecipeBottomBanner()}
        </div>
    );
}

export default RecipeCard;