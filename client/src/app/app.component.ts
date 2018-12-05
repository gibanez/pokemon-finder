import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  opened = false;
  pokemons:Array<any>;
  length = 0;
  pageSize = 10;
  filter:string = null;
  pokemon:any;
  constructor(protected pokemonService: PokemonService) {
      
  }

  ngOnInit() {
    this.listPokemon(0, this.pageSize, null)
  }

  detail(pokemon) 
  {
  	//alert(123)
  	this.opened = true;
    this.pokemonService.detail(pokemon).subscribe((response:any) => {
      console.info(response);
      this.pokemon = response;
    })
  }

  search() {
    this.listPokemon(0, this.pageSize, this.filter);
  }

  paginate (event) {
    console.info(event);
    console.info(this.filter)
    this.listPokemon(event.pageIndex, this.pageSize, this.filter);

  }

  listPokemon(offset, limit, filter) {

    this.pokemonService.search(filter, offset, limit).subscribe( (response:any) => {
        const { data, page, perPage, total } = response;
        console.info(response);
        this.pokemons = data;
         this.length = total;
         this.pageSize = perPage
     });
  }

}
