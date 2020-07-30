import React, {Fragment, useState} from 'react';

const Search = (props) =>{
    const [name, setName] = useState("");

    console.log("pokemon", props.dataPokemon[0])

    const searchPokemon = (name) => {
        console.log(name)
        const result = props.dataPokemon.filter((pokemon) => {
            const lowerCasePokemon = pokemon.Name.toLowerCase()
            if(lowerCasePokemon.includes(name)){
                return pokemon
            }
        });

        console.log(result)
        // const pokemons = [props.dataPokemon]
    }

    return(
        <Fragment>
            <input 
                type="text" 
                className="input" 
                placeholder="Pokemon or type" 
                onChange={e => searchPokemon(e.target.value)}
            />
            <div className="loader"></div>
        </Fragment>
    )
}

export default Search