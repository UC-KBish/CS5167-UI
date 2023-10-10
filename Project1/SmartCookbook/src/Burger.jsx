// import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import DescriptionSegment from './components/DescriptionSegment';
import CookwareSegment from './components/CookwareSegment';
import IngredientsSegment from './components/IngredientsSegment';
import StepsSegment from './components/StepsSegment';
import TabletBoundingBox from './components/TabletBoundingBox'
import Header from './components/Header'

import React, { useRef, useEffect } from 'react';

function RecipeSearchBar(){
  // RecipeSearch = document.getElementById('RecipeSearchBar');
  // RecipeSearchHeader = document.getElementById('RecipeSearchHeader');

  // RecipeSearchHeader.innerHTML = RecipeSearchBar.value;
  return (<input id='RecipeSearchBar' type='text' placeholder='Search For Recipe' style={{ position: 'absolute', top: '40%', right: '25%', backgroundColor: "#FFFFFFC0", height: '15%', width: '50%', borderRadius: '5px', fontSize: '110%' }} />);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TabletBoundingBox>
      <div className='flex' style={{ minWidth: '100%', height: '60px', backgroundColor: '#c0c0c0', top: '0', position: 'absolute', justifyContent: 'center' }}>
      </div>
      <Header backToIndex='true' title='Burger'/>
      <DescriptionSegment/>
      <CookwareSegment/>
      <IngredientsSegment/>
      <StepsSegment/>
    </TabletBoundingBox>
  </React.StrictMode>,
)

function scrollToElement(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" }); // "smooth" for smooth scrolling
}

// Check if the browser supports the SpeechRecognition API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  // Configure recognition settings (optional)
  recognition.continuous = true; // Continuous listening
  recognition.interimResults = true; // Get interim results

  // Event listeners for speech recognition
  recognition.onstart = () => {
    console.log('Listening...');
  };

  recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript.toLowerCase();
    console.log('Recognized:', result);

    const regex = /[ ]*okay cookbook(.*)/.exec(result)

    if (regex) {

      // Add visual queue here
      const query = regex[1];


      let subquery = /.*step (\w+)/.exec(query)
      if (subquery) {
        console.log('Subquery: ', subquery[1])
        subquery[1] = subquery[1].replace('1','one');        
        subquery[1] = subquery[1].replace('2','two');        
        subquery[1] = subquery[1].replace('3','three');        
        subquery[1] = subquery[1].replace('4','four');        
        subquery[1] = subquery[1].replace('5','five');        
        subquery[1] = subquery[1].replace('6','six');        
        subquery[1] = subquery[1].replace('7','seven');        
        subquery[1] = subquery[1].replace('8','eight');        
        subquery[1] = subquery[1].replace('9','nine');        
        subquery[1] = subquery[1].replace('10','ten');
        console.log('Subquery: ', subquery[1])

        scrollToElement('step_' + subquery[1])
      } 
    }

    // You can do something with the recognized text here
    // For example, update a text field with the recognized speech
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };

  // Start the recognition
  recognition.start();
} else {
  console.error('Speech recognition not supported in this browser.');
}