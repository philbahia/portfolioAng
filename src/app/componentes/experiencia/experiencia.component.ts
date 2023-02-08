import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos: any = [];

  //inyectar el servicio para acceder a la clase
  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(datos => {


      this.trabajos = datos.experiencia;


    });
  }
}
