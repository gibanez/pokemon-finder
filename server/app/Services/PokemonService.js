'use strict'
const axios = require('axios');
const Pokemon = use('App/Models/Pokemon');
class PokemonService {
	async search(term, offset = 0, limit = 10) {
		const query = Pokemon.query();

		if(term) 
		{
			query.whereRaw(`name LIKE '%${term}%'`);
		}

		const pokemons =  await query.paginate(offset, limit);
		return pokemons;
	}

	async detail(id) {
		const pokemon = await Pokemon.find(id);

		if(!pokemon)
		{
			throw 'ERROR'
		}

		const moves = [];
		const stats = [];
		const sprites = {front:null, back:null};

		const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.reference_id);

		console.info(data)

		const info = {
			name: data.name,
			height: data.height,
			weight: data.weight
		}

		data.moves.forEach(move => {
			moves.push(move.move.name);
		})

		data.stats.forEach(stat => {
			stats.push({
				name: stat.stat.name, 
				value: stat.base_stat
			});
		})

		sprites.front = data.sprites.front_default;
		sprites.back = data.sprites.back_default;

		return {info, moves, stats, sprites}
	}

	
}


module.exports = PokemonService