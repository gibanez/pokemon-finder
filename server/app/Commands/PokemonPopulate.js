'use strict'

const { Command } = require('@adonisjs/ace')
const Request = use('Request')
const Database = use('Database')
const Pokemon = use('App/Models/Pokemon')
const axios = require('axios');



class PokemonPopulate extends Command {
  static get signature () {
    return 'pokemon:populate'
  }

  static get description () {
    return 'Command make models Pokemon from api'
  }

  async handle (args, options) {
    this.info('Pokemon: Populate from api (pokeapi.co)')

	await Database.truncate('pokemons');

	const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
	const { results } = data;
	let pokemons = [];
	results.forEach((pokemonData) => {
		pokemons.push({
			name: pokemonData.name,
			reference_id: pokemonData.url.split('/').splice(-2, 1).toString() 
		});
	});

	Pokemon.createMany(pokemons).then(resp => {
    		//console.info(resp)
    		this.success('Pokemons created: ' + pokemons.length);
    		return true;
    	}).catch(err=>{
    		this.error('ERROR:');
    		this.error(err);
    		
    		return false;
    	});
	
  }
}

module.exports = PokemonPopulate
