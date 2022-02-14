import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component'

const routes: Routes = [
  {
    path: '',
    component: TarjetasComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'tarjetas',
  //   component: TarjetasComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
