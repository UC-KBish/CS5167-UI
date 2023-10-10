import RecipeCard from './RecipeCard';
import data from '../data/recipes.json'

function RecipeContainer() {
    let recipes = [];

    recipes.push([]);
    recipes.push([]);

    let side = 0;

    data.map((recipe, index) => {
        recipes[side].push(<RecipeCard name={recipe.Name} imageName={recipe.Image} backgroundColor="#FFFFFF"></RecipeCard>)
        side = (side + 1) % 2; 
    })

return (
    <a href='/burger.html' style={{textDecoration: 'none', color: 'black'}}>
    <div className='flex' id='RecipeContainer'>
        <div style={{ width: '100%', padding: '10px'}}>
            {recipes[0]}
        </div>
        <div style={{ width: '100%', padding: '10px' }}>
            {recipes[1]}
        </div>
    </div>
    </a>
);
    
}

export default RecipeContainer; 