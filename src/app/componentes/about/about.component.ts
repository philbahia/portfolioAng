import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //crear variable de instancia
  nombre: string = '';
  apellido: string = '';
  profesion: string = '';
  detalle: string = '';

  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(datos => {


      this.nombre = datos.nombre;
      this.apellido = datos.apellido;
      this.profesion = datos.profesion;
      this.detalle = datos.detalle;

    });
  }
}
