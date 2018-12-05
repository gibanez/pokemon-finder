import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

	url: string = ''
  constructor(private http: HttpClient) {
  	this.url = environment.apiUrl;
  }

  search(term, offset, limit) {
  	let params = new HttpParams();
  	params = params.append('offset', offset);
    params = params.append('limit', limit);

    if(term) {
		params = params.append('q', term);    	
    }

  	return this.http.get(this.url + '/pokemon', { params: params });
  }

  detail(pokemon) {
  	return this.http.get(this.url + '/pokemon/' + pokemon.id);	
  }

}
