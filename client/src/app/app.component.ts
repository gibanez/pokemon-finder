import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened = false;
  pokemons:Array<any>;
  total = 0;
  page = 0;
  perPage = 10;
  filter:string = null;
  pokemon:any;
  constructor(protected pokemonService: PokemonService) {}

  detail(pokemon) {
    this.opened = true;
    this.pokemon = null;
    this.pokemonService.detail(pokemon).subscribe((response:any) => {
      this.pokemon = response;
    })
  }

  ngOnInit() {
    this.search();
  }

  listPokemon(pageNum, limit, filter) {
    this.pokemonService.search(filter, pageNum, limit).subscribe( (response:any) => {
        const { data, page, perPage, total } = response;
        console.info(page)
        this.pokemons = data;
        this.total = total;
        this.perPage = perPage,
        this.page = page-1;
     });
  }

  search() {
    this.listPokemon(1, this.perPage, this.filter);
  }

  paginate (event) {
    console.info(event);
    this.listPokemon(event.pageIndex+1, this.perPage, this.filter);
  }
}
