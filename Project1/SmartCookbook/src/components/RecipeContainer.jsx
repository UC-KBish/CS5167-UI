import recipeData from '../data/recipes.json'

function RecipeBottomBanner(props) {
    const handleClick = (event) => {
        if (event.target.src == window.location.href.replace(window.location.pathname, '') + '/SaveForLaterTrue.png') {
            event.target.src = 'SaveForLaterFalse.png'
        } else {
            event.target.src = 'SaveForLaterTrue.png'
        }
    }

    let stars = []
    let starCount = recipeData[parseInt(props.id)].RatingVal

    for (let i = 0; i < 5; i++) {
        if (starCount > 0.75) {
            stars.push(<img src="star-full.png" style={{ height: '1.5rem', marginTop: '0.75rem' }}></img>)
        } else if (starCount > 0.25) {
            stars.push(<img src="star-half.png" style={{ height: '1.5rem', marginTop: '0.75rem' }}></img>)
        } else {
            stars.push(<img src="star-empty.png" style={{ height: '1.5rem', marginTop: '0.75rem' }}></img>)
        }
        starCount--;
    }

    return (
        <div style={{ backgroundColor: '#e8e8e8', width: '100%', bottom: '0' }}>
            <div className="flex">
            {stars}

                <p>{ recipeData[parseInt(props.id)].hasOwnProperty("Ratings") ? '(' + recipeData[parseInt(props.id)].Ratings + ')': '(0)' }</p>


                <button className='save-for-later-button' onClick={handleClick}>
                    <img id={'save-for-later-' + props.id} class='save-for-later' src="SaveForLaterFalse.png"></img>
                </button>
            </div>
        </div>
    )
}

function RecipeCard(props) {

    return (

        <div className='RecipeCard' id={'recipe-' + props.id}>
            <a href='/burger.html' style={{ textDecoration: 'none', color: 'black' }}>
                <h3 style={{ padding: '10px', margin: 0 }}>{props.name}</h3>
                <img src={props.imageName} style={{ width: '90%', margin: '5%', borderRadius: '5px' }}></img>
            </a>

            <RecipeBottomBanner id={props.id} />

        </div>
    );
}

function RecipeContainer() {

    return (
        <div id='RecipeContainer'>
            <div>
                {recipeData.map((recipe, index) => {
                    if (index % 2 === 0) {
                        return <RecipeCard id={index} name={recipe.Name} imageName={recipe.Image} key={index}></RecipeCard>
                    }
                })}
            </div>
            <div>
                {recipeData.map((recipe, index) => {
                    if (index % 2 === 1) {
                        return <RecipeCard id={index} name={recipe.Name} imageName={recipe.Image} key={index}></RecipeCard>
                    }
                })}
            </div>
            <div hidden>
            </div>
        </div>
    );

}

export default RecipeContainer; 