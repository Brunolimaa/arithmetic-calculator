import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CalculatorComponent } from './calculator/calculator.component'
import { TableRecordsComponent } from './_components/table-records/table-records.component'

const routes: Routes = [
  {path: 'home', component: LoginComponent },
  {path: 'calculator', component: CalculatorComponent},
  {path: 'records', component: TableRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
