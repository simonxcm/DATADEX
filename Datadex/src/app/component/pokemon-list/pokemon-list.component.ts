import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from '../../pokedex.service';

export interface Pokemon {
  name: string;
  url: string;
  details?: PokemonDetails[];
  id: number;
}

export interface PokemonDetails {
  id: number;
  types: PokemonType [];
  sprites: PokemonSprites;
}

export interface PokemonType {
  slot: number;
  types: PokemonTypeDetails;
}

export interface PokemonTypeDetails {
  name: string;
  url: string;
}

export interface PokemonSprites {

}



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any [] = [];

  constructor(private pokedexService : PokedexService) {
    //this.fetchAllPokemons();
  }

  ngOnInit(): void {

    this.pokedexService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: Pokemon) => {
          this.pokedexService.getPokemonName(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              //console.log(this.pokemons);
            });
        });
      });
  }

  /* fetchAllPokemons(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then((allpokemons) => {
      console.log(allpokemons.results);
      this.pokemons = allpokemons.results;
    });
  } */



}
