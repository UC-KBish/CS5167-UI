import data from '../data/recipes.json'

function DescriptionSegment(props) {
    return (
        <div className='recipe-instruction-card'>
            <h2>Description</h2>

            <div class='flex'>
                <img src={data[props.recipeIndex].Image} style={{ width: '50%' }}></img>
                <p style={{ marginInline: '10px', marginBlock: 0, width: '50%', height: '170px', overflow: 'auto' }}>{data[props.recipeIndex].Description}</p>
            </div>
        </div>
    )
}

function CookwareSegment() {
    return (
        <div className='recipe-instruction-card'>
            <h2>Cookware</h2>
            <ul>
                <li>Grill, stovetop pan, or griddle</li>
                <li>Spatula</li>
                <li>Cooking thermometer (optional but recommended)</li>
            </ul>
        </div>
    )
}

function IngredientsSegment() {
    return (
        <div className='recipe-instruction-card'>
            <h2>Ingredients</h2>
            <ul>
                <li>Ground beef (typically 80% lean, 20% fat is a good choice)</li>
                <li>Burger buns</li>
                <li>Salt and pepper</li>
                <li>Optional toppings (lettuce, tomato, onion, cheese, pickles, condiments, etc.)</li>
            </ul>
        </div>
    )
}

function Step(props) {
return (<>
<h3 id={props.id} style={{marginBottom: 0}}>{'Step ' + (parseInt(props.index) + 1) + ': ' + data[props.recipeIndex].Steps[props.index].Title}</h3>
            <div style={{backgroundColor: '#303030', margin: 0, width: '100%', height: '2px'}}/>
                <p>{data[props.recipeIndex].Steps[props.index].Instruction}</p>
            </>);
}

function StepsSegment(props) {
    return (
        <div className='recipe-instruction-card'>
            <h2>Steps</h2>
            {data[props.recipeIndex].Steps.map((step, index) => {
                return <Step recipeIndex={props.recipeIndex} id='step_one' index={index}/>
            })}
            </div>)
}

function Instructions(props) {
    return (<>
        <DescriptionSegment recipeIndex={props.recipeIndex} />
        <CookwareSegment />
        <IngredientsSegment />
        <StepsSegment recipeIndex={props.recipeIndex}/>
    </>)
}

export default Instructions
