import React, { useState } from 'react'
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import './AnimalShow.css'

const svgMap = {
  bird: bird,
  cat:cat,
  cow:cow,
  dog:dog,
  gator:gator,
  horse:horse
};
/*
 Creamos este objeto para hacer mas facil el acceso como mas abajo, con la finalidad de acceder rapidamente a la imagen
 Con esta forma podemos evitar estar poniendo muchos if para descubrir cual es la imagen que se tiene que colocar, porque si usamos
 este objeto, accede rapidamente segun el nombre del atributo del objeto al que estamos usando para mapear (svgMap)
 */


const AnimalShow = ({type}) => {

  const [clicks,setClicks] = useState(0);

const handleClick = ()=>{
  setClicks(clicks+1);

}

  return (
    <div className='animal-show' onClick={handleClick}>
       <img className='animal' src={svgMap[type]} alt="animal"/>
       <img className='heart' src={heart} alt="heart" 
       style={{width:10 + 10*clicks+'px'}}
       />
      
    </div>
  )
}

export default AnimalShow;
