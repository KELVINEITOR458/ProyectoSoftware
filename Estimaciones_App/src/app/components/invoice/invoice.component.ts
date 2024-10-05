import { Component, OnInit } from '@angular/core';
import { Proyect } from '../model/proyect';
import { ProjectEstimateService } from '../../services/project-estimate.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  proyect!:Proyect;

  constructor(private service:ProjectEstimateService){}

  ngOnInit(): void {
    this.proyect = this.service.getProject();
  }
}
