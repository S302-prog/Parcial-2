import { PaisService } from './../pais.service';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Array<Pais> = [];
  oldestCountry!: string;
  oldestYear!: number;
  selectedPais!: Pais;
  selected = false;
  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  getPaisesList() {
    this.paisService.getPaises().subscribe(paises => {
      this.paises = paises;
      this.calculateOldestCountry();
    });
  }

  calculateOldestCountry() {
    let oldestYear = Infinity;
    let oldestCountry = '';
    for (let country of this.paises) {
        if (country.formation_year < oldestYear) {
            oldestYear = country.formation_year;
            oldestCountry = country.name;
        }
    }
    this.oldestCountry = oldestCountry;
    this.oldestYear = oldestYear;
}

  onSelected(pais: Pais): void{
    this.selected = true;
    this.selectedPais = pais;
  }
 
  ngOnInit() {
    this.getPaises();
    this.getPaisesList();
  }

}
