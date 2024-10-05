import { Injectable } from '@angular/core';
import { Proyect } from '../components/model/proyect';
import { projectExtimation } from '../data/estimacion.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectEstimateService {
private project:Proyect = projectExtimation;
  constructor() { }

 getProject(): Proyect{
    return this.project;
  }
}
