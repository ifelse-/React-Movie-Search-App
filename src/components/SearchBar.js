import React, { useEffect, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const searchButtonText = 'Search';
const searchPlaceholder = 'Search Movie....'

function SearchBar(props){
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearchInputChanges  = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    
    const handleSearchMovieList  = (e) => {
       e.preventDefault();
       console.log(searchValue);
       props.search(searchValue);
       resetInputField();
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    return (
     <form className="searchbox">    
        <InputGroup className="mb-3">
            <FormControl
            placeholder={searchPlaceholder}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleSearchInputChanges}
            value={searchValue}
            />
            <Button onClick={handleSearchMovieList} variant="outline-secondary" id="search-movie-btn">
              {searchButtonText}
            </Button>
        </InputGroup>
     </form>
    )
 }


 export default SearchBar;
