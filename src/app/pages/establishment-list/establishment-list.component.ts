import { Component, OnInit } from '@angular/core';
import Establishment from 'src/app/models/Establishment';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.scss']
})
export class EstablishmentListComponent implements OnInit {

  public establishments: Establishment[];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit(): void {
    this.establishments = JSON.parse(localStorage.getItem('@establishments'));

    if(!this.establishments){
      this.establishmentService.setEstablishments().subscribe(establishments => {
        this.establishments = establishments;
      });
    }
  }

}
