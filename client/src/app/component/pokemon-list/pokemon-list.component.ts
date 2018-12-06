import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons:Array<any>;
  @Input() length = 0;
  @Input() pageSize = 10;
  @Input() page = 0;
  
  @Output() onPokemonSelected = new EventEmitter();
  @Output() onPage = new EventEmitter();

  constructor() { }
  ngOnInit() {}

  pokemonSelected(pokemon) {
  	this.onPokemonSelected.emit(pokemon);
  }

  paginate (event) {
    this.onPage.emit(event);
  }
}
