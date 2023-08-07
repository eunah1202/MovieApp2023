// App.js
import React, { Component } from 'react'
import Movie from './Movie'
// 설치한 라이브러리: axios를 사용하려면 import해줘야해
import axios from 'axios'

export class App extends Component {
  state = { //~ class형 함수형태에서 사용
    // true로 처음 나오게 하고 영화데이터가 다들어오고 나면false로 바꿔서 안보이게 하고 영화정보(movies)들이 보여지게 함
    isLoading:true,
    // getMovies에서 const로 저장한 배열가져와서 저장해줄것임
    movies:[],
  }

  // 함수만들기
  // async() await 지정해주면 서버에서 영화데이터 다 가져올동안 기다리라고 하는것 써줘야해 
  getMovies=async()=>{
    // axios(라이브러리)로 불러올거야 -> 다운 받아야해 ctrl + c(서버끝내는거) -> N -> npm install axios ; axios설치
    // const movies 라고 하고 console확인해보면 data연결고리 확인 가능 
    const {
      data: { //data라는 속성안에
        data: {movies}  //data라는 속성이 또 있고 그 안에 movies
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count') //서버에서 데이터 가져오는것 -list_movies.json파일에서 장르 에니메이션이고 좋아요순으로 가져와

    console.log('movies',movies);

    // 속성(키)과 속성값(키값)이똑같을 경우 하나만 써줘도됨 movies:movies
    // setState함수실행하면 render함수 바로 실행된다
    this.setState({isLoading:false,movies})//키:키값
  }

  // 영화데이터를 불러온다 ~ class형 함수형태에서 사용
  componentDidMount(){
    // 아래 내용 직접적으로 불러오지 않고 함수로 호출해서 불러올거야~~ bc)비동기방식으로 호출할거기때문에 바로 입력하면 적용이 안된다
    // // 6초간은 Loading글자나오고 값 바꿔주기 설정
    // setTimeout(()=>{
    //   // 값을 바꿔주려면 setState사용
    //   this.setState({isLoading:false});
    // },6000);
    this.getMovies();
  }
  // 창에 실행되는 것들
  render() {
    // isLoading 사용하기위해서 정의해줘야해 => 구조분해할당으로~~ 
    const {isLoading, movies} = this.state;
    return (
      <section>
        {/* 삼항연산자이용:  isLoading ? true일때 실행내용 : false일때 실행내용*/}
        {/* isLoading이 변수이기에 중괄호 안에 묶어줘야해 */}
        {isLoading ? 
        <div className='loader'>
          <span className='loader_text'>'Loading... 조금만 기다려주세요...'</span>
        </div>
        : 
        <div className='movies'>
          {/* medium_cover_image, title, year, summary 넣어줘야해*/}
          {/* 배열에 있는 요소 하나하나 가져와서 새로운 배열 만들어줘야하기때문에 movies.map이라고 쓴것  */}
          {movies.map((movie,index)=>(
            // props형태로 가져오기
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
//react는 일반 css로 꾸미지 않고 scss를 사용함 ~~~ to be continue...
export default App