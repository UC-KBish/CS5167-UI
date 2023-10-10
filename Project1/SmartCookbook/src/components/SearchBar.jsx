import React, { useState } from 'react';
import RecipeContainer from './RecipeContainer';
import data from '../data/recipes.json'

function sortRecipes(sortVal){
    sortVal = sortVal.toLowerCase();
    let tempData = data;
    if (sortVal) {
        
    }

    const RecipeContainer = document.getElementById('RecipeContainer')
    let tempRecipeContainer = RecipeContainer;

    [...Array(RecipeContainer.children.item(0).childElementCount)].forEach((_, index) => {
      console.log(RecipeContainer.children.item(0).children.item(index))
      console.log(RecipeContainer.children.item(1).children.item(index))

      if (index === 1) {
        document.getElementById('recipe-' + index).style.display = 'none'
      }
    }) 

    


    // alert("HERE")
 
}

function SearchBar(){

    const [inputValue, setInputValue] = useState("");
  
    const updateRecipes = (value) => {
      console.log(value);
      if (!value) {
        document.getElementById('RecipeSearchHeader').innerText = 'Popular Recipes'
        sortRecipes(null)

      } else {
        document.getElementById('RecipeSearchHeader').innerText = 'Search: ' + value
        sortRecipes(value)
      }
    };
  
    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
  
      updateRecipes(newValue);
    };
  
    return (<input onChange={handleInputChange} id='RecipeSearchBar' type='text' placeholder='Search For Recipe' style={{ position: 'absolute', top: '40%', right: '25%', backgroundColor: "#FFFFFFC0", height: '15%', width: '50%', borderRadius: '5px', fontSize: '110%' }} />);
  }

  export default SearchBar

