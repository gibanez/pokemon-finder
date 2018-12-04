'use strict'

class PokemonController 
{

	static get inject () 
	{
		return ['App/Services/PokemonService'];
	}

	constructor(pokemonService) 
	{
		this.pokemonService = pokemonService;
	}

	async index ({ request, response }) 
	{
		const {q, limit, offset } = request.only(['q', 'limit', 'offset']);
		const pokemons = await this.pokemonService.search(q, offset, limit)
    	response.json(pokemons)
  	}

  	async show ({ request, params, response }) 
	{
		const id = params.id;
		console.info(id);

		const pokemon = await this.pokemonService.detail(id)
    	response.json(pokemon)
  	}
}

module.exports = PokemonController
