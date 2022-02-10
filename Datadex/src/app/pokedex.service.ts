import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PokedexService {


  constructor(private http : HttpClient) { }

    getPokemons() {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=30`);
    }

    getPokemonName(name: string) {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }

    getPokemonType() {
      return this.http.get('https://pokeapi.co/api/v2/type/');
    }

    getPokemonTypeName(name: string) {
      return this.http.get(`https://pokeapi.co/api/v2/type/${name}`);
    }
}
