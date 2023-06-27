import React from 'react';
import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css'

function getRandomAnimal(){
  const animales = ['bird','cat','gator','cow','horse','dog'];
  return animales[Math.floor(Math.random() * animales.length)];

}


const App = () => {

  const [animals,setAnimals]=useState([]);


    const handleClick = ()=>{
        setAnimals([...animals,getRandomAnimal()]);
    };

const renderedAnimals = animals.map((animal,index)=>{
return <AnimalShow type={animal} key={index}></AnimalShow>
})



  return (
    <div className='app'>
        <button onClick={handleClick}>Add animal</button>
        <div className='animal-list'>{renderedAnimals}</div>
        
       
    </div>
  );
}

export default App;
