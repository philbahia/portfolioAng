import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  escuelas: any = [];

  //inyectar el servicio para acceder a la clase

  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(datos => {

      this.escuelas = datos.educacion;

    })
  }
}