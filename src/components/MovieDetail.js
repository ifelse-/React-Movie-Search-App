import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';
import 'moment-timezone';

 function MovieDetail(props){
      const location = useLocation();
      const axios = require('axios');
      const movieprofile = location.state.movieprofile;
      const MOVIE_PREVIEW_API = "https://api.themoviedb.org/3/movie/"+movieprofile.id+"/videos?api_key=8456730734c58d7961896c56a3d8f386&language=en-US";
      const [moviePreviewId, setMoviePreviewId] = useState(null);

        // componentDidMount
      useEffect(() => {
          console.log(location.state.movieprofile)

          axios.get(MOVIE_PREVIEW_API)
          .then(function (response) {
          // handle success
          console.log('response', response.data.results[0].key)
          setMoviePreviewId(response.data.results[0].key)
          })
          .catch(function (error) {
          // handle error
         
          })
          .then(function (response) {
          // always executed
          }); 


      },[]);

    return (
        <section className="container">
         
          <Container>
            <Row>
              <Col xs lg="3 m-2 box-shadow">
                <div className="movie-artwork center">
                   <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/"+movieprofile.poster_path}/>
                </div>
                <div className="mt-4 movie-sub-detail">
                  <div className="average-vote"> 
                    <div>{movieprofile.vote_average} </div> 
                   <div className="average-vote-txt bold">Vote Average</div>
                  </div>

                </div>
              </Col>
              <Col xs lg="7 m-2">
                <div className="movie-description box-shadow p-4">
                <h2>{movieprofile.original_title}</h2>
                   <p><span className="bold">Release Date:</span> <Moment format="MMMM Do YYYY, h:mm:ss a">{movieprofile.release_date}</Moment></p>
                   <p><span className="bold">Language:</span> {movieprofile.original_language}</p>

                   {movieprofile.overview}
                </div>

                <div className="movie-video box-shadow p-5">
                  <iframe width="100%" height="315" src={"https://www.youtube.com/embed/"+moviePreviewId+"?enablejsapi=1"}></iframe>
                </div>
              </Col>
            </Row>
        </Container>
        </section>
      );
}
  
    export default MovieDetail;
  