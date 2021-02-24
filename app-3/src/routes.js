import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PokemonList from './components/pokemonList'
import Pokemon from './components/pokemon'


export default (
    <Switch>
        <Route exact path='/' component={PokemonList} />
        <Route path='/pokemon/:name' component={Pokemon} />
    </Switch>
)