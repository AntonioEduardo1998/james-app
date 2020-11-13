import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentCreateComponent } from './pages/establishment-create/establishment-create.component';
import { EstablishmentListComponent } from './pages/establishment-list/establishment-list.component';

const routes: Routes = [
  {
    path: '', component: EstablishmentListComponent
  },
  {
    path: 'establishment-create/:id',
    component: EstablishmentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
