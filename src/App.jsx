import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import Toggle from './components/Toggle'
import Search from './components//Search'

const URL_PATH = "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";


const App = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {

        fetch(URL_PATH)
        .then( (response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                setPokemon(data);
            });
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
        
    }, []);

    const createSearch = () => {

    }

    return(
    <Fragment>
        <Toggle />
        <Search 
            dataPokemon = {pokemon}
            search = {createSearch}
        />
        <ul className="suggestions">
            <li>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="" />
                <div className="info">
                    <h1>
                        <span className="hl">Pika</span>chu</h1>
                    <span className="type electric">Electric</span>
                    <span className="type normal">Normal</span>
                </div>
            </li>
            <li>
                <img src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png" alt="" />
                <div className="info">
                    <h1 className="no-results">
                        No results
                    </h1>
                </div>
            </li>
        </ul>
    </Fragment>
    )
}

export default App;
