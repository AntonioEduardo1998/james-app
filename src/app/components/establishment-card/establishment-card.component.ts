import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Establishment from '../../models/Establishment';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent implements OnInit {

  @Input() establishment: Establishment;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public handleEstablishmentNavigate(id: string){
    this.router.navigate(['establishment-create', id]);
  }

}
