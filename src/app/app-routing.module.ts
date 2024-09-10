import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CalculatorComponent } from './calculator/calculator.component'
import { TableRecordsComponent } from './_components/table-records/table-records.component'
import { AuthGuard } from './_interceptors/auth.guard'; 

const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: 'calculator', component: CalculatorComponent, canActivate: [AuthGuard] }, // Protect this route
  { path: 'records', component: TableRecordsComponent, canActivate: [AuthGuard] } // Protect this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
