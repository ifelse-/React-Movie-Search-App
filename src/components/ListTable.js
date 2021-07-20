import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom'

function ListTable(props){

  const history = useHistory();
  const movieListHeader = 'What to watch...'

  const handleMovieDetail = (obj) => {
      //console.log('Click happened', obj);
      history.push({
        pathname: '/moviedetail',
        state: { movieprofile: obj}
    });
  }

    return(
      <section>
       <div className="movie-header">{movieListHeader}</div> 
      <Row>
       {props.items.map((items, index) => {
        return (<Row className="movie-row"  key={index}>
          {items.map(item => 
          <Col onClick={() => handleMovieDetail(item)} className="movie-item" xs lg="2"  key={item.original_title}>
             <div className="movie-rating">{item.vote_average}</div>
             <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/"+item.poster_path}/>
             <div className="movie-title bold">{item.original_title} </div>
          </Col>)}
        </Row>);
       })}
      </Row>  
    
     </section>
    )
  }

  export default ListTable;
