import data from '../data/recipes.json'

function DescriptionSegment() {
    return (<div style={{ marginInline: '15px' }}>
        <h2>Description</h2>

        <div class='flex'>
            <img src='Burger.jpg' style={{ width: '50%' }}></img>
            <p style={{ marginInline: '10px', marginBlock: 0, width: '50%', height: '170px', overflow: 'auto' }}>{data[0].Description}</p>
        </div>
    </div>)
}

export default DescriptionSegment
