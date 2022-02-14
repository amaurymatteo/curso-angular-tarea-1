import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input()
  nombre: string ='';
  @Input()
  titulo: string = '';
  @Input()
  bio: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
