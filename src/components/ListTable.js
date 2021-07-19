import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListTable(props){

  const movieListHeader = 'What to watch...'

    const handleMovieDetail = (obj) => {
      console.log('Click happened', obj);
    }

    return(
      <section>
       <div className="movie-header">{movieListHeader}</div> 
      <Row>
       {props.items.map((items, index) => {
        return (<Row className="movie-row"  key={index}>
          {items.map(item => 
          <Col onClick={() => handleMovieDetail(item)} className="movie-item" xs lg="2"  key={item.original_title}>
             <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/"+item.poster_path}/>
             <div className="movie-title">{item.original_title} </div>
          </Col>)}
        </Row>);
       })}
      </Row>  
    
     </section>
    )
  }

  export default ListTable;
