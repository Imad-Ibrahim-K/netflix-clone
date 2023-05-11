import "./Banner.css"
import axios from '../../axios'
import {API_KEY,imagUrl} from "../../constants/constants"
import React, { useEffect,useState } from 'react'



function Banner() {

      const [movie, setMovie] = useState([])
    const [number,setNumber] = useState(0)
    
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        
        const min = 0;
        const max = response.data.results.length-1;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        setNumber(rand);
        setMovie(response.data.results[number])
    
      })
    },[number]);
    
  return (
    
    <div 
      style={{backgroundImage:`url(${imagUrl+movie.backdrop_path})`}}
    className='banner'>    
       <div className='content'>
          <h1 className='title'>{movie.original_title}</h1>
          <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
            <h1 className='description'>{movie ? movie.overview : null}</h1>
       </div>
       <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner