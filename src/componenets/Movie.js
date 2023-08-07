// Movie.js
import '../styles/Movie.css'
// 함수형 컴포넌트로 만듬 rfce
import React from 'react'

function Movie({poster, title, year, summary,genres,id}) {
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
        <h3 className='movie_title'>Movie Title : {title}</h3>
        <h4 className='movie_year'>Movie Year : {year}</h4>
        <h5 className='movie_genres'></h5>
        <ul className='movie_genres'>
          {genres.map((genre,index)=>(
            <li className='movie_genre' key={index}>{genre}</li>
          ))
          }
        </ul>
        {/* summary부분 너무 길어 -> slice: 인덱스 0~ 180까지 나오게해라 */}
        <p className='movie_summary'>Movie Summary : {summary.slice(0,180)}...</p>
      </div>
    </div>
  )
}

export default Movie
