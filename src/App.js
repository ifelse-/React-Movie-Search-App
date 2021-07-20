import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';
import ListTable from './components/ListTable';
import Header from './components/Header';
import MovieDetail from './components/MovieDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  const axios = require('axios');
  const FAVORITE_LIST_API = 'https://api.themoviedb.org/3/movie/popular?api_key=8456730734c58d7961896c56a3d8f386&language=en-US&page=1';
  const SEARCH_MOVIE_LIST_API = 'https://api.themoviedb.org/3/search/movie?api_key=8456730734c58d7961896c56a3d8f386&language=en-US&page=1&include_adult=false&query=';

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

    // componentDidMount
    useEffect(() => {
      // Make a request for a user with a given ID
        axios.get(FAVORITE_LIST_API)
        .then(function (response) {
        // handle success
        console.log(response.data.results);
        //Create col and row separation
        const result = response.data.results.map((x,i) => {
            return i % 5 === 0 ? response.data.results.slice(i, i+5) : null;
        }).filter(x => x != null);
      
        setItems(result);
        setIsLoaded(true);

        })
        .catch(function (error) {
        // handle error
        setIsLoaded(true);
        setError(error);
        console.log(error);
        })
        .then(function (response) {
        // always executed
        }); 
  },[]);
 
  //Search movie result api
  const search = searchValue => {
    console.log('searchValue', searchValue);

    axios.get(SEARCH_MOVIE_LIST_API+searchValue)
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        const result = response.data.results.map((x,i) => {
          return i % 5 === 0 ? response.data.results.slice(i, i+5) : null;
      }).filter(x => x != null);
    
      setItems(result);
      setIsLoaded(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  
  }

  function Home(props){
    return (
        <section className="container">
           <Header />
           <SearchBar search={search} />
           <ListTable items={items} />
        </section>
      );
  }

  return (
      <Router>
        <div>
          <nav>
            <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/moviedetail">
              <MovieDetail />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
