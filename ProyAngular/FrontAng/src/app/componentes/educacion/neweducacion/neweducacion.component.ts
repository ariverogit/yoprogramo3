import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  constructor(private educacionS: EducacionService, private router:Router){ }

  ngOnInit(): void {
      
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE,this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data=>{
        alert("educacion agregada correctamente");
        this.router.navigate(['']);
      }, err=>{
        alert("fallo");
        this.router.navigate(['']);
      }
    )
  }


}
