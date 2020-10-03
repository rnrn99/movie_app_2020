import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component {

    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    }

    componentDidMount() {
        // 영화 데이터 로딩
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return <div>{isLoading ? 'Loading...' :
            movies.map((movie) => {
                return (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                    />
                );
            })}</div>;
    }
}

export default App;


// App 컴포넌트 정의, 그리고 App 컴포넌트는 html 반환.
// function 이름의 첫글자는 대문자.
// props 쓸 때는 중괄호 사용
// props.fav 사용 안 하고 { fav } = props; 혹은 함수의 인자를 { fav }로 받은 뒤 바로 { fav }사용도 가능.
// state는 반드시 class형 컴포넌트 안에서, 소문자로 적어야 함.
// render() 함수보다 constructor()함수가 먼저 실행됨.