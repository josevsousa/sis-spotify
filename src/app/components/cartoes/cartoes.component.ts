import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent implements OnInit {

  @Input() cartoes: any;

  constructor() { }

  ngOnInit() {
  }

}
