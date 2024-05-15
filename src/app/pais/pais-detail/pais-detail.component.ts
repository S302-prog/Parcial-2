import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit {

  @Input() paisDetail!: Pais;
  constructor() { }

  ngOnInit() {
  }

}
