// 클라스형 컴포넌트 rce
import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../componenets/Movie';
import '../styles/Home.css'

export class Home extends Component {
  state = {
    isLoading:true,
    movies:[],
  }
  
  getMovies=async()=>{
    const {
      data: { //data라는 속성안에
        data: {movies}  //data라는 속성이 또 있고 그 안에 movies
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count') //서버에서 데이터 가져오는것 -list_movies.json파일에서 장르 에니메이션이고 좋아요순으로 가져와
    console.log('movies',movies);
  
    this.setState({isLoading:false,movies})//키:키값
  }
  
  componentDidMount(){
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className='container'>
        {isLoading ? 
        <div className='loader'>
          <span className='loader_text'>'Loading... 조금만 기다려주세요...'</span>
        </div>
        : 
        <div className='movies'>
          {movies.map((movie,index)=>(
            <Movie
              key={index}
              id={movie.id}
              poster={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
        }
      </section>
    )
  }
}
export default Home