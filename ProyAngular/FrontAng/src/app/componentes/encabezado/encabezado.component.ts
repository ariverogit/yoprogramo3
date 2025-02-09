import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  miPortfolio:any;
  
  
  constructor(private datosPortfolio:PortfolioService) {}
  

  ngOnInit() : void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
      
      
    });
  }


  
  

  editHeader(){
    console.log("editar Header!");

  }

}
