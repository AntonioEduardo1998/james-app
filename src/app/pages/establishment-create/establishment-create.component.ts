import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Establishment from 'src/app/models/Establishment';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-establishment-create',
  templateUrl: './establishment-create.component.html',
  styleUrls: ['./establishment-create.component.scss']
})
export class EstablishmentCreateComponent implements OnInit {
  public checkoutForm;
  public items;

  public establishment: Establishment;
  public document: string;
  public establishments: Establishment[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private establishmentService: EstablishmentService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.establishments = JSON.parse(localStorage.getItem('@establishments'));

      this.establishment = this.establishments.find(establishment => establishment.id === params.id);

      let agency = [];
      let account = [];

      if(this.establishment.agency){
        agency = this.establishment.agency.split('-');
      }

      if(this.establishment.account){
        account = this.establishment.account.split('-');
      }


      this.checkoutForm = this.formBuilder.group({
        name: this.establishment.name,
        address: this.establishment.address,
        city:this.establishment.city,
        bank: this.establishment.bank,
        accountType: this.establishment.accountType,
        document: this.establishment.document,
        agency: Number(agency[0]) || '',
        agencyDigit: Number(agency[1]) || '',
        account: Number(account[0]) || '',
        accountDigit: Number(account[1]) || '',
        autoWithdrawal: this.establishment.autoWithdrawal,
      });
    })
  }

  onSubmit(customerData: Establishment) {

    // this.checkoutForm.reset();

    console.log('Your order has been submitted', customerData);


    this.establishment = {
      ...this.establishment,
      name: customerData.name,
      city: customerData.city,
      address: customerData.address,
      bank: customerData.bank,
      document: customerData.document,
      agency: `${customerData.agency} - ${customerData.agencyDigit}`,
      account: `${customerData.account} - ${customerData.accountDigit}`,
      accountType: customerData.accountType,
      autoWithdrawal: customerData.autoWithdrawal,
    }

    this.establishmentService.addNewEstablishment(this.establishment);

  }

  public handleGoBack(){
    this.router.navigate(['/']);
  }

  public documentChange(event){
    const value = (event.target as HTMLInputElement).value;
    if(value.length < 14){
      this.document = '000.000.000-00';
    }else{
      this.document = '00.000.000/0000-00';
    }
    console.log(value)
  }

}
