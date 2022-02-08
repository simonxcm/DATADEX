import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any [] = [];

  constructor(private pokedexservice : PokedexService) {
    //this.fetchAllPokemons();
  }

  ngOnInit(): void {
    this.pokedexservice.getPokemons()
      .subscribe((response:any) => {
        console.log(response);
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
