import React from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import {useEffect,useState} from 'react'
import {imagUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'


function RowPost(props) {

  const [movie, setMovie] = useState([])
  const [url, setUrl] = useState('')

  useEffect(() => {
   axios.get(props.url).then((response)=>{
    setMovie(response.data.results)
    // console.log(response.data)
   })
  }, [props])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const movieTrailer =(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrl(response.data.results[0])
      }
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj)=>
              
              <img onClick={()=>movieTrailer(obj.id)} className={props.isLarg ? 'poster' : 'small'} key={obj.id} src={`${imagUrl+obj.backdrop_path}`} alt="row-poster" />
          )}
            
            
        </div>
      {url &&  <YouTube videoId={url.key} opts={opts} />}
    </div>
  )
}

export default RowPost