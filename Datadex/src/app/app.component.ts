import { Component, OnInit } from '@angular/core';
import { PokedexService} from './pokedex.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'Datadex';
}
