import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  departamentos: any[] = [];

  constructor(private _departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    
    this._departamentoService.getDepartamentos().subscribe({
      next: (data) => {
        console.log('DATA', data);
        this.departamentos = data;
      }, error: (e) => {
        console.log('Error', e);
      }
    });

  }

}
